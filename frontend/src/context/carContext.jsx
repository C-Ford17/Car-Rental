import React, { createContext, useReducer, useContext } from 'react';

const CarContext = createContext();

const initialState = {
  cars: [],
  selectedCar: null,
};

function carReducer(state, action) {
  switch (action.type) {
    case 'SELECT_CAR':
      return { ...state, selectedCar: action.payload };
    case 'SET_CARS':
      return { ...state, cars: action.payload };
    case 'ADD_CAR':
      return { ...state, cars: [...state.cars, action.payload] };
    case 'REMOVE_CAR':
      return { ...state, cars: state.cars.filter(car => car.id !== action.payload) };
    default:
      return state;
  }
}

export const CarProvider = ({ children }) => {
  const [state, dispatch] = useReducer(carReducer, initialState);

  return (
    <CarContext.Provider value={{ state, dispatch }}>
      {children}
    </CarContext.Provider>
  );
};

export const useCarContext = () => useContext(CarContext);