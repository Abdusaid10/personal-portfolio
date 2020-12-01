import React from 'react';
import Navbar from '../containers/Navbar';
import Portfolio from './Portfolio';
import About from './About';
import RecentWork from '../containers/RecentWork';
import GetStarted from '../containers/GetStarted';
import Footer from './Footer';
import '../assets/styles/reset.css';
import '../assets/styles/index.css';
import '../assets/styles/Navbar.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div className="app">
    <Navbar />
    <Portfolio />
    <RecentWork />
    <About />
    <GetStarted />
    <Footer />
  </div>
);

export default App;
