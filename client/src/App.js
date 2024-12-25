import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import Signup from './components/Signup';
import TourPage from './components/TourPage';
import SingleTourPage from './components/SingleTourPage';
import Loading from './components/Loading'; 
import Booking from './components/Booking';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading /> 
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/tours" element={<TourPage />} />
            <Route path="/tours/:id" element={<SingleTourPage />} />
            <Route path="/booking/:id" element={<Booking />} />

          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
