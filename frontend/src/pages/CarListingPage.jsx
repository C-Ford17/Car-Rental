import React, { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';
import CarList from '../components/CarList';
import AddCarModal from '../components/AddCarModal';

const CarListingPage = () => {
  const { state, dispatch } = useCarContext();
  const [filters, setFilters] = useState({ location: '', startDate: '', endDate: '' });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/cars')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_CARS', payload: data }));
  }, [dispatch]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const filteredCars = state.cars.filter((car) => {
    const isLocationMatch = filters.location ? car.location.includes(filters.location) : true;
    const isStartDateMatch = filters.startDate ? new Date(car.availableFrom) <= new Date(filters.startDate) : true;
    const isEndDateMatch = filters.endDate ? new Date(car.availableTo) >= new Date(filters.endDate) : true;
    return isLocationMatch && isStartDateMatch && isEndDateMatch;
  });

  const handleRentClick = (car) => {
    dispatch({ type: 'SELECT_CAR', payload: car });
    navigate('/rent');
  };

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
      </div>
      <CarList cars={filteredCars} onRentClick={handleRentClick} />
      {isModalOpen && <AddCarModal onClose={handleModalClose} />}
    </div>
  );
};

export default CarListingPage;