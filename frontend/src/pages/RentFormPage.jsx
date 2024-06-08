import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCarContext } from '../context/carContext';

const RentFormPage = () => {
  const { state, dispatch } = useCarContext();
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    idNumber: '',
    address: '',
    phone: ''
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Guardar información del usuario
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {  
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(form)
    })
    .then(response => response.json())
    .then(user => {
      dispatch({ type: 'SET_RENTER_INFO', payload: user });

      // Guardar historial de renta
      const rentHistoryToSaveDTO = {
        userName: user.firstName,
        userIdNumber : user.idNumber,
        carName: state.selectedCar.name,
        carImage: state.selectedCar.image
      };
      console.log(rentHistoryToSaveDTO)

      fetch('http://localhost:8080/api/rentHistory', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(rentHistoryToSaveDTO)
      })
      .then(() => {
        fetch(`http://localhost:8080/api/cars/${state.selectedCar.id}`, {
          method: 'DELETE',
        })
        .then(() => {
          dispatch({ type: 'REMOVE_CAR', payload: state.selectedCar.id });
          navigate('/summary');
        })
        .catch(error => console.error('Error:', error));
      })
      .catch(error => console.error('Error:', error));
    })
    .catch(error => console.error('Error:', error));
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <div>
      <h1>Rent Car</h1>
      {state.selectedCar && (
        <div>
          <h2>{state.selectedCar.name}</h2>
          <img src={state.selectedCar.image} alt={state.selectedCar.name} style={{ width: '150px', height: '100px' }} />
        </div>
      )}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={form.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={form.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={form.idNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={form.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={form.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Confirm</button>
        <button type="button" onClick={handleCancel}>Cancel</button>
      </form>
    </div>
  );
};

      
export default RentFormPage;