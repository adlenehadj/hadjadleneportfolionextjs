// src/pages/projects.js
import React from 'react';
import PrivateRoute from '../components/PrivateRoute';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Projects from '../components/Projects';

const ProjectsPage = () => {
  return (
    <PrivateRoute>
      <Header />
      <Projects />
      <Footer />
    </PrivateRoute>
  );
};

export default ProjectsPage;


