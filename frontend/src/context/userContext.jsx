import React, { createContext, useReducer, useContext } from 'react';

const UserContext = createContext();

const initialState = {
  users: [],
  selectedUser: null
};

function userReducer(state, action) {
  switch (action.type) {
    case 'SELECT_USER':
      return { ...state, selectedUser: action.payload };
    case 'SET_USERS':
      return { ...state, users: action.payload };
    case 'ADD_USER':
      return { ...state, users: [...state.users, action.payload] };
    case 'REMOVE_USER':
      return { ...state, users: state.users.filter(user => user.id !== action.payload) };
    default:
      return state;
  }
}

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => useContext(UserContext);