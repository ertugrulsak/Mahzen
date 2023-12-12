
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import SignUpForm from './components/signUpForm';
import Movie from './components/movie';
import Focus from './components/focus';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUpForm />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/focus" element={<Focus />} />

      </Routes>
    </Router>
  );
};

export default App;