import React from 'react';
import Footer from './Footer';
import '../assets/styles/Portfolio.css';

const Portfolio = () => (
  <div id="portfolio" className="col-md-6">
    <div className="center-items">
      <span>Hello I am</span>
      <div id="info">
        <h2>
          Abdusaid
          <br />
          Abdurasulov
        </h2>
        <span className="circle">A.A</span>
      </div>
      <p>
        I am a Full-Stack Web Developer. I love to design
        complex database designs.
      </p>
    </div>
    <Footer />
  </div>
);

export default Portfolio;
