// pages/signup.js
// components/Signup.js
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../redux/slices/authSlice';


const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === '' || password === '' || confirmPassword === '') {
      setError('Veuillez remplir tous les champs');
    } else if (password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas');
    } else {
      setError('');
      dispatch(signup({ email, password }));
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="signup-title">Créer un compte</h1>
        <form onSubmit={handleSubmit} className="signup-form">
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
          <div className="form-group">
            <label>Confirmer le mot de passe :</label>
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="form-input"
            />
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-button">S'inscrire</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;

