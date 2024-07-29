import React, { createContext, useState } from 'react';

const TestimonialsContext = createContext();

const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([
    { id: 1, name: 'John Doe', message: 'Excellent service!' },
    
  ]);

  const addTestimonial = (testimonial) => {
    setTestimonials([...testimonials, { id: testimonials.length + 1, ...testimonial }]);
  };

  return (
    <TestimonialsContext.Provider value={{ testimonials, addTestimonial }}>
      {children}
    </TestimonialsContext.Provider>
  );
};

export { TestimonialsProvider, TestimonialsContext };
