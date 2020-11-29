import React from 'react';
import Contact from './Contact';

const Footer = () => (
  <div className="footer">
    <button id="resumeLink" type="button" onClick={() => console.log('get resume')}>
      <span>Get My Resume</span>
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fillRule="evenodd" clipRule="evenodd" d="M13.4334 2.05151H19.441L9.56804 11.9244L10.9822 13.3386L20.8552 3.46568V9.47335H22.8552V1.05151V0.0515137H21.8552H13.4334V2.05151ZM1.85303 3.20964H6.0643V5.20964H2.85303V20.0533H17.6967V16.8426H19.6967V21.0533V22.0533H18.6967H1.85303H0.853027V21.0533V4.20964V3.20964H1.85303Z" fill="#DB4747" />
      </svg>
    </button>
    <Contact />
  </div>
);

export default Footer;
