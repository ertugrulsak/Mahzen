
import React from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import SignUpForm from './components/signUpForm';
import Focus from './components/focus';
import LanetliTavsan from './components/lanetliTavsan';
import Navbar from './components/navbar';
import Login from './components/login';
import Landing from './components/landing';

const App = () => {
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/signup" element={<SignUpForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/focus" element={<Focus />} />
        <Route path="/tavsan" element={<LanetliTavsan />} />

      </Routes>
    </Router>
  );
};

export default App;