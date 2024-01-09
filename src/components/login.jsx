// Login.js

import React, { useState } from 'react';
import '../Css/login.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    //Kullanıcı adı ve şifre 'admin' ise giriş yap
    if (formData.username === 'admin' && formData.password === 'admin') {
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} />
        </label>
        <br />
        <label>
          Password:
          <input type="password" name="password" value={formData.password} onChange={handleChange} />
        </label>
        <br />
        {error && <p className="error">{error}</p>}
        <button className='login-button' type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
