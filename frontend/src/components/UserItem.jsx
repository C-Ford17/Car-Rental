import React from 'react';


const UserItem = ({ user, onUseClick }) => {
        return (
          <div className="user-item">
            <h2>{user.firstName + " " + user.lastName}</h2>
            <p>ID Number: {user.idNumber}</p>
            <p>Adress: {user.adress}</p>
            <p>Phone : {user.phone}</p>
            <button onClick={() => onUseClick(user)}>Use</button>
          </div>
        );
      };
      
      export default UserItem;