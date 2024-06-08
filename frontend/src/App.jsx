import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarListingPage from './pages/CarListingPage';
import RentFormPage from './pages/RentFormPage';
import RentSummaryPage from './pages/RentSummaryPage';
import { CarProvider } from './context/carContext';
import RentHistoryPage from './pages/RentHistoryPage';
import UserSelectionPage from './pages/UserSelectionPage';
import { UserProvider } from './context/userContext';

const App = () => {
  return (
    <UserProvider>
    <CarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CarListingPage />} />
          <Route path="/rent" element={<RentFormPage />} />
          <Route path="/summary" element={<RentSummaryPage />} />
          <Route path="/rentHistory" element={<RentHistoryPage />} />
          <Route path="/select-user" element={<UserSelectionPage />} />
        </Routes>
      </Router>
    </CarProvider>
    </UserProvider>
  );
};

export default App;
