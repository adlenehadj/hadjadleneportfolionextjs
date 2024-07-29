import React, { useState } from 'react';


const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validate = () => {
    let errors = {};

    if (!formData.name) {
      errors.name = 'Le nom est requis';
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      errors.email = 'L\'email est requis';
    } else if (!emailPattern.test(formData.email)) {
      errors.email = 'L\'email n\'est pas valide';
    }

    if (!formData.message) {
      errors.message = 'Le message est requis';
    }

    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setSubmitted(true);
      // Envoyer les données du formulaire au serveur ou effectuer une autre action ici
    }
  };

  return (
    <div className="contact">
      <h1>Contactez-nous</h1>
      {submitted ? (
        <p className="success-message">Merci pour votre message. Nous vous répondrons bientôt.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Nom :</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="error">{errors.name}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="email">Email :</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>
          <div className="form-group">
            <label htmlFor="message">Message :</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
          </div>
          <button type="submit" className="submit-button">Envoyer</button>
        </form>
      )}
    </div>
  );
};

export default Contact;

