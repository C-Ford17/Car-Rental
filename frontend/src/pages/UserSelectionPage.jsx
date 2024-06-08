import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useUserContext } from '../context/userContext';
import './UserSelectionPage.css';
import UserList from '../components/UserList';
import AddUserModal from '../components/AddUserModal';
import DeleteUserModal from '../components/DeleteUserModal';

const UserSelectionPage = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isModalOpenDelete , setIsModalOpenDelete] = useState(false);
  const { state, dispatch } = useUserContext();
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/users')
      .then(response => response.json())
      .then(data => dispatch({ type: 'SET_USERS', payload: data }));
  }, [dispatch]);

  const handleAddUserClick = () => {
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    window.location.reload()
  };
  const handleDeleteUserClick = () => {
    setIsModalOpenDelete(true);
  };

  const handleModalDeleteClose = () => {
    setIsModalOpenDelete(false);
    window.location.reload()
  };


  const handleSelectClick = (user) => {
    dispatch({ type: 'SELECT_USER', payload: user });
    navigate('/');
  };

  const users = state.users;


  return (
    <div className="user-selection-container">
      <h1>Select User</h1>
      <button onClick={handleAddUserClick}>Add User</button>
      
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
      <button className="delete-button" onClick={handleDeleteUserClick}>Delete</button>
      <UserList users={users}  onUseClick={handleSelectClick} />
      {isModalOpenDelete && <DeleteUserModal onCloseDeleted={handleModalDeleteClose}/>}
      {isModalOpen && <AddUserModal onClose={handleModalClose}/>}
      
    </div>
  );  
};

export default UserSelectionPage;