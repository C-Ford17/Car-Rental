import React, { useState } from 'react';
import { useUserContext } from '../context/userContext';

const AddUserModal = ({ onClose }) => {
    const { dispatch } = useUserContext();
    const [newUser, setNewUser] = useState({
        firstName: '',
        lastName: '',
        idNumber: '',
        address: '',
        phone: ''
      });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewUser({ ...newUser, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:8080/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newUser)
    })
    .then(response => response.json())
    .then(data => {
      dispatch({ type: 'ADD_USER', payload: data });
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
          name="firstName"
          placeholder="First Name"
          value={newUser.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={newUser.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="idNumber"
          placeholder="ID Number"
          value={newUser.idNumber}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="address"
          placeholder="Address"
          value={newUser.address}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={newUser.phone}
          onChange={handleChange}
          required
        />
        <button type="submit">Add User</button>
        <button type="button" onClick={onClose}>Cancel</button>
      </form>
      </div>
    </div>
  );
};

export default AddUserModal;