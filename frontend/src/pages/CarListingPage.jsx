import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';
import CarList from '../components/CarList';
import AddCarModal from '../components/AddCarModal';
import './CarListingPage.css';
import { useUserContext } from '../context/userContext';


const CarListingPage = () => {
  const { state, dispatch } = useCarContext();
  const [filters, setFilters] = useState({ location: '', priceMinor: '', priceMajor: '', startDate: '', endDate: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();
  const { state : user } = useUserContext();

  useEffect(() => {
    fetch('http://localhost:8080/api/cars')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_CARS', payload: data }));
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const handleRentClick = (car) => {
    if (!state.renterInfo) {
      alert('Please select a user before renting a car.');
      navigate('/select-user');
      return;
    }

    const confirmRent = window.confirm(`Are you sure you want to rent the car ${car.name} by user ${state.renterInfo.firstName} ${state.renterInfo.lastName} (ID: ${state.renterInfo.idNumber})?`);
    if (confirmRent) {
      dispatch({ type: 'SET_SELECTED_CAR', payload: car });
      navigate('/summary');
    }
  };

  const filteredCars = state.cars.filter((car) => {
    const isLocationMatch = filters.location ? car.location.includes(filters.location) : true;
    const isPriceMinor = filters.priceMinor ? car.price <= filters.priceMinor : true;
    const isPriceMajor = filters.priceMajor ? car.price >= filters.priceMajor : true;
    const isStartDateMatch = filters.startDate ? new Date(car.availableFrom) <= new Date(filters.startDate) : true;
    const isEndDateMatch = filters.endDate ? new Date(car.availableTo) >= new Date(filters.endDate) : true;
    return isLocationMatch && isStartDateMatch && isEndDateMatch && isPriceMinor && isPriceMajor;
  });

  const handleAddCarClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Car Listing</h1>
      <div>
        <input
          type="text"
          name="location"
          placeholder="Location"
          value={filters.location}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="priceMinor"
          placeholder="Price Minor"
          value={filters.priceMinor}
          onChange={handleFilterChange}
        />
        <input
          type="number"
          name="priceMajor"
          placeholder="Price Major"
          value={filters.priceMajor}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="startDate"
          placeholder="Start Date"
          value={filters.startDate}
          onChange={handleFilterChange}
        />
        <input
          type="date"
          name="endDate"
          placeholder="End Date"
          value={filters.endDate}
          onChange={handleFilterChange}
        />
        <button onClick={handleAddCarClick}>Add Car</button>
        <button onClick={() => navigate('/rentHistory')}>Rent History</button>
        <button onClick={() => navigate('/select-user')}>Select User</button>
      </div>
      <CarList cars={filteredCars} onRentClick={handleRentClick} />
      {isModalOpen && <AddCarModal onClose={handleModalClose} />}
    </div>
  );
};

export default CarListingPage;