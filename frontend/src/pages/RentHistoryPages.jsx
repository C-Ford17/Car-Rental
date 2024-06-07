import React, { useEffect, useState } from 'react';

const RentHistoryPage = () => {
  const [rentHistories, setRentHistories] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/rentHistory')
      .then(response => response.json())
      .then(data => setRentHistories(data));
  }, []);

  return (
    <div>
      <h1>Rent History</h1>
      <ul>
        {rentHistories.map((history) => (
          <li key={history.id}>
            Car ID: {history.carId}, User ID: {history.userId}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RentHistoryPage;