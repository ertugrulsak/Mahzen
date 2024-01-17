import React, { useState, useEffect } from 'react';
import axios from 'axios';

function HelloWorld() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    axios.get('http://localhost:8000/signup/')
      .then(response => {
        setMessage(response.data.form);
      })
      .catch(error => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      
      <p>{message}</p>
    </div>
  );
}

export default HelloWorld;