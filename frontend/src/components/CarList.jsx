import React from 'react';
import CarItem from './CarItem';

const CarList = ({ cars, onRentClick }) => {
  return (
    <div className="car-list">
      {cars.map((car) => (
        <CarItem key={car.id} car={car} onRentClick={onRentClick} />
      ))}
    </div>
  );
};

export default CarList;