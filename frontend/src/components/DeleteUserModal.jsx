import { useState , useEffect} from "react";
import { useUserContext } from "../context/userContext";
import './DeleteUserModal.css';

const DeleteUserModal = ({ onCloseDeleted }) => {
    const { dispatch } = useUserContext();
    const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);


    useEffect(() => {
        fetch('http://localhost:8080/api/users')
          .then(response => response.json())
          .then(data => setUsers(data));
      }, []);
      
    const handleUserClick = (user) => {
        setSelectedUser(user)
        dispatch({ type: 'SELECT_USER', payload: user });
    };

    const handleSubmit = (e) => {
        console.log(selectedUser)
        if (selectedUser) {
          fetch(`http://localhost:8080/api/users/${selectedUser.id}`, {
              method: 'DELETE'
          })
          .then(() => {
              dispatch({ type: 'REMOVE_USER', payload: selectedUser.id });
              dispatch({ type: 'SELECT_USER', payload: null });
              setSelectedUser(null)
              onCloseDeleted();
            })
          .catch(error => console.error('Error:', error));
        }
    }


      return (
        <>
          <div className="modal">
            <div className="modal-content">
              <h2>Delete User</h2>
              <ul className="user-list-modal">
                {users.map(userX => (
                  <li
                    key={userX.id}
                    className={`user-item-modal ${selectedUser && selectedUser.id === userX.id ? 'selected' : ''}`}
                    onClick={() => handleUserClick(userX)}
                  >
                    {userX.firstName} {userX.lastName}
                  </li>
                ))}
              </ul>
              <form onSubmit={handleSubmit}>
                <button type="submit" disabled={!selectedUser}>Delete User</button>
                <button type="button" onClick={onCloseDeleted}>Cancel</button>
              </form>
            </div>
          </div>
    </>
  );
    };
    
    export default DeleteUserModal;

