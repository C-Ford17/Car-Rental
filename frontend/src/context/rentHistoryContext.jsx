import React, { createContext, useReducer, useContext } from 'react';

const RentHistoryContext = createContext();

const initialState = {
    rentHistories: []
};

const rentHistoryReducer = (state, action) => {
    switch (action.type) {
        case 'SET_RENT_HISTORIES':
            return {
                ...state,
                rentHistories: action.payload
            };
        case 'CLEAR_RENT_HISTORIES':
            return {
                ...state,
                rentHistories: []
            };
        default:
            return state;
    }
};

export const RentHistoryProvider = ({ children }) => {
    const [state, dispatch] = useReducer(rentHistoryReducer, initialState);

    return (
        <RentHistoryContext.Provider value={{ state, dispatch }}>
            {children}
        </RentHistoryContext.Provider>
    );
};

export const useRentHistoryContext = () => useContext(RentHistoryContext);