import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';
import RentSummary from '../components/RentSummary';

const RentSummaryPage = () => {
  const { state } = useCarContext();
  const { selectedCar, renterInfo } = state;
  const navigate = useNavigate();

  const handleBackToListing = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Rent Summary</h1>
      <RentSummary selectedCar={selectedCar} renterInfo={renterInfo} />
      <button onClick={handleBackToListing}>Back to Car Listing</button>
    </div>
  );
};

export default RentSummaryPage;