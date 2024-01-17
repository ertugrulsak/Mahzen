import { useNavigate } from "react-router-dom";
import React, { useState, useEffect } from 'react';

const TvSerie = () => {
  const [tvSeriesList, setTvSeriesList] = useState([]);
  const [activeTab, setActiveTab] = useState('tvSeries'); // Varsayılan olarak TV dizileri sekmesi seçili

  const getTvSeries = () => {
    fetch("https://api.themoviedb.org/3/discover/tv?api_key=17369b5bf133657b5aaa5dfee4b519cb")
      .then(response => response.json())
      .then(json => setTvSeriesList(json.results))
      .catch(error => console.error('Error fetching data:', error));
  }

  useEffect(() => {
    getTvSeries();
  }, []);

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  }

  return (
    <div>
      <Navbar activeTab={activeTab} onTabChange={handleTabChange} />
      {activeTab === 'tvSeries' && <TvSeriesList tvSeriesList={tvSeriesList} />}
      {/* Diğer sekmeleri ekleyebilirsiniz */}
    </div>
  );
}

const Navbar = ({ activeTab, onTabChange }) => {
  return (
    <nav className="navbar">
      <ul>
        <li className={activeTab === 'tvSeries' ? 'active' : ''} onClick={() => onTabChange('tvSeries')}>TV Series</li>
        {/* Diğer sekmeleri ekleyebilirsiniz */}
      </ul>
    </nav>
  );
}

const TvSeriesList = ({ tvSeriesList }) => {
  const navigate = useNavigate();

  return (
    <div className="movie-container">
      <div className='navbar-container'>
        <h1>TV Series List</h1>
        <button onClick={() => navigate("/home")}>Go Home</button>
      </div>
      <ul className="movie-list">
        {tvSeriesList.map(tvSeries => (
          <li key={tvSeries.id} className="movie-item">
            <img
              className="movie-image"
              src={`https://image.tmdb.org/t/p/w200/${tvSeries.poster_path}`}
              alt={tvSeries.name}
            />
            <p className="movie-title">{tvSeries.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TvSerie;
