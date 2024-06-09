import React, { useState ,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useRentHistoryContext } from '../context/rentHistoryContext';
import './RentHistoryPage.css';

const RentHistoryPage = () => {
  const { state , dispatch } = useRentHistoryContext();
  const [showConfirmation, setShowConfirmation] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/rentHistory')
      .then(response => response.json())
      .then(data => {
        dispatch({ type: 'SET_RENT_HISTORIES', payload: data });
    });
  }, [dispatch]);

  const handleClearHistory = () => {
    setShowConfirmation(true);
};

const confirmClearHistory = () => {
  if (state.rentHistories.length !== 0){
    fetch('http://localhost:8080/api/rentHistory/clear', {
      method: 'DELETE'
    }).then(() => {
      dispatch({ type: 'CLEAR_RENT_HISTORIES' });
      setShowConfirmation(false);
    }).catch(error => console.error('Error:', error));
  }else {
    alert('No rental histories to clear!');
  }
};

const cancelClearHistory = () => {
    setShowConfirmation(false);
};

  return (
    <div className="rent-history">
      <h1>Rent History</h1>
      {showConfirmation && (
                <div className="confirmation-dialog">
                    <p>Are you sure you want to clear the rent history?</p>
                    <button onClick={confirmClearHistory}>Yes</button>
                    <button onClick={cancelClearHistory}>No</button>
                </div>
            )}
      <div className="rent-history-list">
        {state.rentHistories.map(rent => (
          <div key={rent.id} className="rent-history-item">
          <div className="details">
            <h2>Detalles del Carro</h2>
            <p><strong>Nombre del Carro:</strong> {rent.carName}</p>
        
            <h2>Detalles del Usuario</h2>
            <p><strong>Nombre:</strong> {rent.userName}</p>
            <p><strong>Número de Identificación:</strong> {rent.userIdNumber}</p>
          </div>
          <img src={rent.carImage} alt={rent.carImage} className="car-image" />
        </div>
        
        ))}
      </div>
      <button onClick={handleClearHistory} className="clear-history-button">Clear History</button>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default RentHistoryPage;