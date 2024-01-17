import React, { useState, useEffect } from 'react';
import '../Css/movie.css'; 
import { useNavigate } from "react-router-dom";


const Movie = () => {
  const [movieList, setMovieList] = useState([]);
  const [activeTab, setActiveTab] = useState('movies'); // Varsayılan olarak filmler sekmesi seçili

  const getMovie = () => {
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=17369b5bf133657b5aaa5dfee4b519cb")
      .then(response => response.json())
      .then(json => setMovieList(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getMovie();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'movies' && <MovieList movieList={movieList} />}
      {/* Diğer sekmeleri ekleyebilirsiniz */}
    </div>
  );
}

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeTab === 'movies' ? 'active' : ''} onClick={() => onTabChange('movies')}>Movies</li>
        {/* Diğer sekmeleri ekleyebilirsiniz */}
      </ul>
    </nav>
  );
}

const MovieList = ({ movieList }) => {

  const navigate = useNavigate();

  return (
    <div className="movie-container">
    <div className='navbar-container'>
    <h1>Movie List</h1>
      <button onClick={() => navigate("/home")}>Go Home</button>
    </div>
    
      <ul className="movie-list">
        {movieList.map(movie => (
          <li key={movie.id} className="movie-item">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="movie-title">{movie.title}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movie;
