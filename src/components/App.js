import React from 'react';
import Navbar from '../containers/Navbar';
import About from './About';
import '../assets/styles/reset.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/styles/index.css';
import '../assets/styles/Navbar.css';

const App = () => (
  <div className="app">
    <Navbar />
    <About />
    <p>App</p>
  </div>
);

export default App;
