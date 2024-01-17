import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import tavşan from "../images/tavşan.png";
import "../Css/home.css";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../firebase";
import { logout as logoutHandle } from "../store/auth";

const ListemPage = () => {
  const [kitapListesi, setKitapListesi] = useState([]);
  const [filmListesi, setFilmListesi] = useState([]);
  const [diziListesi, setDiziListesi] = useState([]);

  const handleKitapEkle = (kitap) => {
    setKitapListesi((prevList) => [...prevList, kitap]);
  };

  const handleFilmEkle = (film) => {
    setFilmListesi((prevList) => [...prevList, film]);
  };

  const handleDiziEkle = (dizi) => {
    setDiziListesi((prevList) => [...prevList, dizi]);
  };

  return (
    <div className="listem-page">
      <h2>Listem</h2>

      <div>
        <h3>Kitaplar</h3>
        <ul>
          {kitapListesi.map((kitap, index) => (
            <li key={index}>{kitap}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Filmler</h3>
        <ul>
          {filmListesi.map((film, index) => (
            <li key={index}>{film}</li>
          ))}
        </ul>
      </div>

      <div>
        <h3>Diziler</h3>
        <ul>
          {diziListesi.map((dizi, index) => (
            <li key={index}>{dizi}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const BookList = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const handleLogout = async () => {
    await logout();
    dispatch(logoutHandle());
    navigate("/login", {
      replace: true,
    });
  };

  if (user) {
    return (
      <div>
        <h1>Oturumun açık ({user.email})</h1>
        <button onClick={handleLogout}>Çıkış yap</button>
      </div>
    );
  }

  const books = [{ id: 1, title: "Lanetli Tavşan" }];

  return (
    <div className="book-list">
      <h2 className="book-title">Kitaplar</h2>
      <ul className="books">
        <img className="tavsan" src={tavşan} alt="Tavşan" />
        {books.map((book) => (
          <button
            className="books-spec"
            key={book.id}
            onClick={() => navigate("/tavsan")}
          >
            {book.title}
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
          <button key={movie.id}>{movie.title}</button>
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
        <button
          className="nav-button"
          onClick={() => navigate("/book")}
        >
          Kitaplar
        </button>
        <button
          className="nav-button"
          onClick={() => navigate("/movie")}
        >
          Filmler
        </button>
        <button
          className="nav-button"
          onClick={() => navigate("/tv-series")}
        >
          Diziler
        </button>
        <button
          className="nav-button"
          onClick={() => navigate("/focus")}
        >
          Focus
        </button>
        <button
          className="nav-button"
          onClick={() => navigate("/listem")}
        >
          Listem
        </button>
      </nav>

      {activeTab === "books" && <BookList />}
      {activeTab === "movies" && <MovieList />}
      {activeTab === "series" && <SeriesList />}
      {activeTab === "listem" && <ListemPage />}
    </div>
  );
};

export default App;
