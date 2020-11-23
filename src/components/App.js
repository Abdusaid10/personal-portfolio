import React from 'react';
import Navbar from '../containers/Navbar';
import About from './About';
import Contact from './Contact';
import '../assets/styles/reset.css';
import '../assets/styles/index.css';
import '../assets/styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <Contact />
  </div>
);

export default App;
