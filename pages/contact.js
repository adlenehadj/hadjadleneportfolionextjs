// pages/contact.js
import React from 'react';
import Contact from '../components/Contact';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';

const ContactPage = () => {
  return (
    <PrivateRoute>
      <Header />
      <Contact />
      <Footer />
    </PrivateRoute>

  );
};

export default ContactPage;
