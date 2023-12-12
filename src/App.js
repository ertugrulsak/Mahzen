
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import SignUpForm from './components/signUpForm';
import Movie from './components/movie';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/home" element={<HomePage />} />

      </Routes>
    </Router>
  );
};

export default App;