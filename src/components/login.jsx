/* import React, { useState } from 'react';
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/login/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        navigate('/home'); // Giriş başarılı ise home sayfasına yönlendir
      } else {
        setError(data.error || 'Invalid username or password');
      }
    } catch (error) {
      setError('An error occurred');
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
 */

import { useDispatch } from "react-redux";
import { useState } from "react";
import { login } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../Css/signUp.css";
import { login as loginHandle} from "../store/auth";



export default function SignUpForm() {
  
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password);
    if(user) {
    dispatch(loginHandle(user))
    navigate('/home' , {
      replace: true
    })
  }
  };

  return (
    <form onSubmit={handleSubmit}>
    <input type="text" placeholder="E-posta adresi" value={email} onChange={e => setEmail(e.target.value)}/> <br />
    <input type="password" placeholder="Parola" value={password} onChange={e => setPassword(e.target.value)}/> <br />
    <button disabled={!email || !password} type="submit">Giriş Yap</button>
  </form> 
  );
}