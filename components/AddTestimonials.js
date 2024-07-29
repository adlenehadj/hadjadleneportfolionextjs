import React, { useState, useContext } from 'react';
import { TestimonialsContext } from '../components/TestimonialsContext';


const AddTestimonials = () => {
  const [formData, setFormData] = useState({
    name: '',
    message: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const { addTestimonial } = useContext(TestimonialsContext);

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
      addTestimonial(formData);
      setSubmitted(true);
    }
  };

  return (
    <div className="add-testimonials">
      <h1>Ajouter un Témoignage</h1>
      {submitted ? (
        <p>Merci pour votre témoignage.</p>
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

export default AddTestimonials;


