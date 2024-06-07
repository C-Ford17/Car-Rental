import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import './UserSelectionPage.css';
import AddUserModal from '../components/AddUserModal';

const UserSelectionPage = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => setUsers(data));
  }, []);

  const handleAddUserClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
  };

  const handleSelectClick = (user) => {
    dispatch({ type: 'SET_SELECTED_USER', payload: user });
    navigate('/');
    }


  return (
    <div className="user-selection-container">
      <h1>Select User</h1>
      <ul className="user-list">
        {users.map(user => (
          <li  key={user.id} className="user-item" onClick={() => handleSelectClick(user)}>
            {user.firstName} {user.lastName}
          </li>
        ))}
      </ul>
      <button onClick={handleAddUserClick}>Add Car</button>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <CarList cars={filteredCars} onUseClick={handleRentClick} />
      {isModalOpen && <AddUserModal onClose={handleModalClose} />}
    </div>
  );
};

export default UserSelectionPage;