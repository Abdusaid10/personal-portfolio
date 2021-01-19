import React from 'react';
// import Footer from './Footer';
import '../assets/styles/Portfolio.css';
import resume from '../assets/Resume_Abdusaid_A.pdf';
import Contact from './Contact';

const Portfolio = () => (
  <div id="portfolio" className="">
    <div className="center-items">
      <span>Hi! I am</span>
      <div id="info">
        <h2>
          Abdusaid
          <br />
          Abdurasulov
        </h2>
        <span className="circle">A.A</span>
      </div>
      <p>
        I&apos;m a Full-Stack Web Developer. I like to build things from scratch and improve them
        continuously by adding new features and fixing bugs. If you have a project you are
        interested in developing or a feature that you need to build, I&apos;d love to help
        you with it. Have a look at some of my projects and experiences, and if you like them,
        don&apos;t hesitate to contact me.
      </p>
    </div>
    <div className="footer" id="footer">
      <a href={resume} className="resume-link" target="_blank" rel="noreferrer">
        <span>Get My Resume</span>
        <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M13.4334 2.05151H19.441L9.56804 11.9244L10.9822 13.3386L20.8552 3.46568V9.47335H22.8552V1.05151V0.0515137H21.8552H13.4334V2.05151ZM1.85303 3.20964H6.0643V5.20964H2.85303V20.0533H17.6967V16.8426H19.6967V21.0533V22.0533H18.6967H1.85303H0.853027V21.0533V4.20964V3.20964H1.85303Z" fill="#DB4747" />
        </svg>
      </a>
      <span id="borderLine" />
      <Contact />
    </div>
  </div>
);

export default Portfolio;
/* Line 8 */
