// components/Testimonials.js
import React, { useContext } from 'react';
import { TestimonialsContext } from './TestimonialsContext';
import Link from 'next/link';



const Testimonials = () => {
  const { testimonials } = useContext(TestimonialsContext);

  return (
    <div className="testimonials">
      <h1>Témoignages</h1>
      <ul>
        {testimonials.map((testimonial) => (
          <li key={testimonial.id}>
            <p><strong>{testimonial.name}:</strong> {testimonial.message}</p>
          </li>
        ))}
      </ul>
      <Link href="/add-testimonial" legacyBehavior>
        <a className="add-testimonial-button">Ajouter un témoignage</a>
      </Link>
    </div>
  );
};

export default Testimonials;


