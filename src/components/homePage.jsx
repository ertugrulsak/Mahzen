import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tavşan from "../images/tavşan.png";
import "../Css/home.css";

const BookList = () => {
  const navigate = useNavigate();

  const books = [
    { id: 1, title: "Lanetli Tavşan" }
  ];

  return (
    <div className="book-list">
      <h2 className="book-title">Kitaplar</h2>

      <ul className="books">
        <img className="tavsan" src={tavşan} />
        {books.map((book) => (
          <button className="books-spec" onClick={() => navigate("/tavsan")}>
            {" "}
            <lu key={book.id}> {book.title} </lu>
          </button>
        ))}
      </ul>
    </div>
  );
};

const MovieList = () => {
  const movies = [
    { id: 1, title: "Movie 1" },
    { id: 2, title: "Movie 2" },
  ];

  return (
    <div className="book-list">
      <h2>Filmler</h2>
      <ul>
        {movies.map((movie) => (
          <button>
            {" "}
            <lu key={movie.id}>{movie.title}</lu>
          </button>
        ))}
      </ul>
    </div>
  );
};

const SeriesList = () => {
  const series = [
    { id: 1, title: "Series 1" },
    { id: 2, title: "Series 2" },
  ];

  return (
    <div className="book-list">
      <h2>Diziler</h2>
      <ul>
        {series.map((serie) => (
          <li key={serie.id}>{serie.title}</li>
        ))}
      </ul>
    </div>
  );
};

const App = () => {
  const [activeTab, setActiveTab] = useState("books");

  const navigate = useNavigate();

  return (
    <div>
      <nav className="navbar">
        <h3 className="app-title">MAHZEN</h3>
        <button className="nav-button" onClick={() => setActiveTab("books")}>
          Kitaplar
        </button>
        <button className="nav-button" onClick={() => setActiveTab("movies")}>
          Filmler
        </button>
        <button className="nav-button" onClick={() => setActiveTab("series")}>
          Diziler
        </button>
        <button className="nav-button" onClick={() => navigate("/focus")}>
          Focus
        </button>
      </nav>

      {activeTab === "books" && <BookList />}
      {activeTab === "movies" && <MovieList />}
      {activeTab === "series" && <SeriesList />}
    </div>
  );
};

export default App;
