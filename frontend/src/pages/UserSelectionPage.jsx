import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import { useCarContext } from '../context/carContext';
import './UserSelectionPage.css';
import UserList from '../components/UserList';
import AddUserModal from '../components/AddUserModal';

const UserSelectionPage = () => {
  const [users, setUsers] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const {dispatch } = useUserContext();
  const {dispatch: dispatchCar} = useCarContext();
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
    dispatchCar({type : 'SET_RENTER_INFO', payload : user});
    navigate('/');
  };


  return (
    <div className="user-selection-container">
      <h1>Select User</h1>
      <button onClick={handleAddUserClick}>Add Car</button>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <UserList users={users}  onUseClick={handleSelectClick} />
      {isModalOpen && <AddUserModal onClose={handleModalClose} />}
    </div>
  );
};

export default UserSelectionPage;