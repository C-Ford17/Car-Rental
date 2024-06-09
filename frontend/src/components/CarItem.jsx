import React from 'react';


const CarItem = ({ car, onRentClick }) => {
        return (
          <div className="car-item">
            <img src={car.image} alt={`${car.name} car`} className="car-image" />
            <h2>{car.name}</h2>
            <p><strong>Location:</strong> {car.location}</p>
            <p><strong>Model:</strong> {car.model}</p>
            <p><strong>Price:</strong> {car.price}</p>
            <p><strong>Available From:</strong> {car.availableFrom}</p>
            <p><strong>Available To:</strong> {car.availableTo}</p>
            <button onClick={() => onRentClick(car)}>Rent</button>
          </div>
        );
      };
      
      export default CarItem;