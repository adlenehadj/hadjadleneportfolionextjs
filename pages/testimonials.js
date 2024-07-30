// pages/testimonials.js
import React from 'react';
import Testimonials from '../components/Testimonials';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';


const TestimonialsPage = () => {
  return (
    <PrivateRoute>
      <Header />
      <Testimonials />
      <Footer />
    </PrivateRoute>
  );
   
};

export default TestimonialsPage;
