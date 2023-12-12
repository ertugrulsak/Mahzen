import React, { useEffect } from 'react';
import axios from 'axios';

const Movie = () => {
  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        url: 'https://netflix54.p.rapidapi.com/search/',
        params: {
          query: 'stranger',
          offset: '0',
          limit_titles: '50',
          limit_suggestions: '20',
          lang: 'en',
        },
        headers: {
          'X-RapidAPI-Key': 'YOUR-RAPIDAPI-KEY', // Kendi RapidAPI anahtarınızı buraya ekleyin
          'X-RapidAPI-Host': 'netflix54.p.rapidapi.com',
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
      } catch (error) {
        console.error(error);
      };
    };

    fetchData(); // Fonksiyonu çağır
  }, []);

  return (
    <div>
      Nasılsın
    </div>
  );
};

export default Movie;
