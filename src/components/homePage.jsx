import React, { useState } from 'react';
import {useNavigate } from "react-router-dom";
import tavşan from "../images/tavşan.png";
import "../Css/home.css"

const BookList = () => {
  // Kitap listesi burada alınabilir


  const books = [
    { id: 1, title: 'Lanetli Tavşan', author: 'Bora Chung' },
    { id: 2, title: 'Book 2' },
  ];

  return (
    <div className="book-list">
      <h2>Kitaplar</h2>

      <ul className="books">
          <img className="tavsan" src={tavşan}/>
        {books.map(book => (
          <li key={book.id}>{book.title} <br/> {book.author} </li>
        ))}
      </ul>
    </div>
  );
};

const MovieList = () => {
  // Film listesi burada alınabilir
  const movies = [
    { id: 1, title: 'Movie 1' },
    { id: 2, title: 'Movie 2' },
    // Diğer filmler...
  ];

  return (
    <div className="book-list">
      <h2>Filmler</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
};

const SeriesList = () => {
  // Dizi listesi burada alınabilir
  const series = [
    { id: 1, title: 'Series 1' },
    { id: 2, title: 'Series 2' },
    // Diğer diziler...
  ];

  return (
    <div className="book-list">
      <h2>Diziler</h2>
      <ul>
        {series.map(serie => (
          <li key={serie.id}>{serie.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState('books');

  const navigate = useNavigate();

  return (
    <div>
      <nav className='navbar'>
        <h3>MAHZEN</h3>
        <button onClick={() => setActiveTab('books')}>Kitaplar</button>
        <button onClick={() => setActiveTab('movies')}>Filmler</button>
        <button onClick={() => setActiveTab('series')}>Diziler</button>
        <button onClick={ () => navigate("/focus")} >Focus</button>
      </nav>

      {activeTab === 'books' && <BookList />}
      {activeTab === 'movies' && <MovieList />}
      {activeTab === 'series' && <SeriesList />}
    </div>
  );
};

export default App;
