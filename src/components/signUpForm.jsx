/* 

import React, { useState } from 'react';
import '../Css/signUp.css';
import { useNavigate } from "react-router-dom"; 

const SignUpForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div>
    <div>
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button  onClick={ () => navigate("/login")} type="submit"> Sign Up</button>
      </form>
    </div>
    </div>
  );
};

export default SignUpForm;


 */

import { useState } from "react";
import { register } from "../firebase";
import { useNavigate } from "react-router-dom";
import "../Css/signUp.css";

export default function SignUpForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await register(email, password);
    console.log(user);
  };

  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="E-posta adresi" value={email} onChange={e => setEmail(e.target.value)}/> <br />
        <input type="password" placeholder="Parola" value={password} onChange={e => setPassword(e.target.value)}/> <br />
        <button disabled={!email || !password} type="submit">Kayıt ol</button>
      </form> 
  );
}
