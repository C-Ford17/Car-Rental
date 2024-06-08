import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarListingPage from './pages/CarListingPage';
import RentSummaryPage from './pages/RentSummaryPage';
import { CarProvider } from './context/carContext';
import RentHistoryPage from './pages/RentHistoryPage';
import UserSelectionPage from './pages/UserSelectionPage';
import { UserProvider } from './context/userContext';
import { RentHistoryProvider } from './context/rentHistoryContext';

const App = () => {
  return (
    <UserProvider>
    <RentHistoryProvider>
    <CarProvider>

      <Router>
        <Routes>
          <Route path="/" element={<CarListingPage />} />
          <Route path="/summary" element={<RentSummaryPage />} />
          <Route path="/rentHistory" element={<RentHistoryPage />} />
          <Route path="/select-user" element={<UserSelectionPage />} />
        </Routes>
      </Router>
    </CarProvider>
    </RentHistoryProvider>
    </UserProvider>
  );
};

export default App;
