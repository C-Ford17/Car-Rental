import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './RentHistoryPage.css';

const RentHistoryPage = () => {
  const [rentHistories, setRentHistories] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch('http://localhost:8080/api/rentHistory')
      .then(response => response.json())
      .then(data => setRentHistories(data));
  }, []);

  return (
    <div className="rent-history">
      <h1>Rent History</h1>
      <div className="rent-history-list">
        {rentHistories.map((history) => (
          <div key={history.id} className="rent-history-item">
            <h2>Car Details</h2>
            <p><strong>Car Name:</strong> {history.carName}</p>
            <img src={history.carImage} alt={history.carImage} className="car-image" />

            <h2>User Details</h2>
            <p><strong>First Name:</strong> {history.userName}</p>
            <p><strong>ID Number:</strong> {history.userIdNumber}</p>
          </div>
        ))}
      </div>
      <button className="back-button" onClick={() => navigate('/')}>Back to Home</button>
    </div>
  );
};

export default RentHistoryPage;