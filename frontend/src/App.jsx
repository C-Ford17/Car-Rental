import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CarListingPage from './pages/CarListingPage';
import RentFormPage from './pages/RentFormPage';
import RentSummaryPage from './pages/RentSummaryPage';
import { CarProvider } from './context/carContext';

const App = () => {
  return (
    <CarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<CarListingPage />} />
          <Route path="/rent" element={<RentFormPage />} />
          <Route path="/summary" element={<RentSummaryPage />} />
        </Routes>
      </Router>
    </CarProvider>
  );
};

export default App;
