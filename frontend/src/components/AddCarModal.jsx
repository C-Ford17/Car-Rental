import React, { useState } from 'react';
import { useCarContext } from '../context/carContext';

const AddCarModal = ({ onClose }) => {
  const { dispatch } = useCarContext();
  const [car, setCar] = useState({
    name: '',
    location: '',
    availableFrom: '',
    availableTo: '',
    image: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCar({ ...car, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/cars', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(car)
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'ADD_CAR', payload: data });
      onClose();
    })
    .catch(error => console.error('Error:', error));
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Add Car</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={car.name}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Location"
            value={car.location}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="availableFrom"
            placeholder="Available From"
            value={car.availableFrom}
            onChange={handleChange}
            required
          />
          <input
            type="date"
            name="availableTo"
            placeholder="Available To"
            value={car.availableTo}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={car.image}
            onChange={handleChange}
          />
          <button type="submit">Add Car</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </form>
      </div>
    </div>
  );
};

export default AddCarModal;