import React from 'react';

const RentSummary = ({ selectedCar, renterInfo }) => {
  if (!selectedCar || !renterInfo) {
    return <p>No car rented or renter information provided.</p>;
  }

  return (
    <div>
      <h2>Car Information</h2>
      <p>Name: {selectedCar.name}</p>
      <p>Model: {selectedCar.model}</p>
      <p>Location: {selectedCar.location}</p>
      <p>Price : {selectedCar.price}</p>
      <p>Available From: {selectedCar.availableFrom}</p>
      <p>Available To: {selectedCar.availableTo}</p>
      <h2>Renter Information</h2>
      <p>First Name: {renterInfo.firstName}</p>
      <p>Last Name: {renterInfo.lastName}</p>
      <p>ID Number: {renterInfo.idNumber}</p>
      <p>Address: {renterInfo.address}</p>
      <p>Phone: {renterInfo.phone}</p>
    </div>
  );
};

export default RentSummary;