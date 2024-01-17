
import React, { useEffect, useState } from 'react';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/homePage';
import SignUpForm from './components/signUpForm';
import Focus from './components/focus';
import LanetliTavsan from './components/lanetliTavsan';
import Navbar from './components/navbar';
import Login from './components/login';
import Landing from './components/landing';
import Movie from './components/movie';
import TvSeries from './components/tvSerie';
import Book from './components/book';
import Django from './components/HelloWorld';
import Listem from './components/List';



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
        <Route path="/movie" element={<Movie />} />
        <Route path="/tv-series" element={<TvSeries />} />
        <Route path="/book" element={<Book />} />
        <Route path="/django" element={<Django />} />
        <Route path="/listem" element={<Listem />} />

      </Routes>
    </Router>
  );
};

export default App;