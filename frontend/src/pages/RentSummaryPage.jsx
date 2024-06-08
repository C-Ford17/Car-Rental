import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';
import { useUserContext } from '../context/userContext';
import './RentSummaryPage.css';

const RentSummaryPage = () => {
  const { state , dispatch } = useCarContext();
  const { state : user } = useUserContext();
  const navigate = useNavigate();

  const handleConfirm = () => {
    const rentHistoryEntry = {
      userName: user.selectedUser.firstName + " " + user.selectedUser.lastName,
      userIdNumber : user.selectedUser.idNumber,
      carName: state.selectedCar.name,
      carImage: state.selectedCar.image,
      rentDate: new Date().toISOString()
    };

    fetch('http://localhost:8080/api/rentHistory', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(rentHistoryEntry)
    })
    .then(response => {
      if (response.ok) {
        // Remove the rented car from the car list
        fetch(`http://localhost:8080/api/cars/${state.selectedCar.id}`, {
          method: 'DELETE',
        })
      } else {
        throw new Error('Failed to confirm rental');
      }
    })
    .then( () => {
        dispatch({ type: 'REMOVE_CAR', payload: state.selectedCar.id });
        navigate('/rentHistory');
    })
    .catch(error => console.error('Error:', error));
  };


  return (
    <div className="rent-confirmation-container">
      <h1>Rent Confirmation</h1>
      <div className="confirmation-details">
        <h2>Car Details</h2>
        <p><strong>Name:</strong> {state.selectedCar.name}</p>
        <p><strong>Location:</strong> {state.selectedCar.location}</p>
        <img src={state.selectedCar.image} alt={state.selectedCar.name} className="car-image" />

        <h2>Renter Details</h2>
        <p><strong>Name:</strong> {user.selectedUser.firstName} {user.selectedUser.lastName}</p>
        <p><strong>ID Number:</strong> {user.selectedUser.idNumber}</p>
        <p><strong>Address:</strong> {user.selectedUser.address}</p>
        <p><strong>Phone:</strong> {user.selectedUser.phone}</p>
      </div>
      <div className="confirmation-buttons">
        <button className="confirm-button" onClick={handleConfirm}>Confirm Rent</button>
        <button className="cancel-button" onClick={() => navigate('/')}>Cancel</button>
      </div>
    </div>
  );
};

export default RentSummaryPage;