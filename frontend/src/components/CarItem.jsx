import React from 'react';


const CarItem = ({ car, onRentClick }) => {
        return (
          <div className="car-item">
            <img src={car.image} alt={`${car.name} car`} className="car-image" />
            <h2>{car.name}</h2>
            <p>Location: {car.location}</p>
            <p>Available From: {car.availableFrom}</p>
            <p>Available To: {car.availableTo}</p>
            <button onClick={() => onRentClick(car)}>Rent</button>
          </div>
        );
      };
      
      export default CarItem;