// components/Login.js
// components/Login.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../redux/slices/authSlice';
import Link from 'next/link';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const dispatch = useDispatch();
  
    const handleSubmit = (e) => {
      e.preventDefault();
      if (email === '' || password === '') {
        setError('Veuillez remplir tous les champs');
      } else {
        setError('');
        dispatch(login({ email, password }));
      }
    };
  
    return (
      <div className="login-container">
        <div className="login-box">
          <h1 className="login-title">Login</h1>
          <form onSubmit={handleSubmit} className="login-form">
            <div className="form-group">
              <label>Email :</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="form-input"
              />
            </div>
            <div className="form-group">
              <label>Mot de passe :</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="form-input"
              />
            </div>
            {error && <p className="error-message">{error}</p>}
            <button type="submit" className="login-button">Se connecter</button>
          </form>
          <div className="login-footer">
            <a href="#" className="login-link">Mot de passe oublié ?</a>
            <Link href="/signup" legacyBehavior>
              <a className="login-link">Créer un compte</a>
            </Link>
          </div>
        </div>
      </div>
    );
  };
  
  export default Login;
