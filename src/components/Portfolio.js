import React from 'react';
import Footer from './Footer';
import '../assets/styles/Portfolio.css';

const Portfolio = () => (
  <div id="portfolio" className="col-md-6">
    <div className="center-items">
      <span>Hi I am</span>
      <div id="info">
        <h2>
          Abdusaid
          <br />
          Abdurasulov
        </h2>
        <span className="circle">A.A</span>
      </div>
      <p>
        I am a Full-Stack Web Developer. I like to build things from scratch
        and improve them continuously by adding new features and fixing bugs.
        If you have a project or a feature build and need help!
        I can help you with that. Look through some of my projects and experience.
        If you like them do not hesitate to contact me.
      </p>
    </div>
    <Footer />
  </div>
);

export default Portfolio;
