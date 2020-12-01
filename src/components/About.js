/* eslint-disable no-console */
import React from 'react';
import '../assets/styles/About.css';
import resume from '../assets/Resume_Abdusaid_A.pdf';

const About = () => {
  const languages = ['JavaScript', 'Ruby', 'HTML', 'CSS', 'SQL', 'Python', 'C'];
  const frameworksLibraries = [
    'React', 'Redux', 'Ruby on Rails', 'Bootstrap', 'RSpec', 'Jest', 'SASS', 'Phaser3',
  ];
  const skills = [
    'GitHub',
    'Git',
    'GitFlow',
    'Webpack',
    'Heroku',
    'Netlify',
    'TDD',
    'Chrome Dev Tools',
  ];
  const softSkills = [
    'Remote Pair Programmnig',
    'Collaborative Problem Solving',
    'Teamwork',
    'Mentoring',
    'Willingness to Learn',
    'Good Listener',
  ];

  return (
    <div id="about" className="row">
      <div id="aboutText" className="col-md-6">
        <h2>About me</h2>
        <article>
          <p>
            I am a simple, honest, hard-working, reliable, dedicated, and knowledgeable developer.
          </p>
          <p>
            I&apos;m a graduate of INHA University
            with a BS degree in Computer Science and Software Engineering.
            In the senior year of University, I enrolled in a remote school called Microverse
            to learn full-stack web development, and have experience in remote work
            collaborating with developers worldwide.
          </p>
          <p>
            I like listening to music, watch movies, play games on PS,
            play basketball, and sometimes play guitar.
          </p>
          <p>
            Open to work in a company or startup as a full-stack developer.
          </p>
        </article>
        <a href={resume} className="resume-link">
          <span>Get My Resume</span>
          <svg width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M13.4334 2.05151H19.441L9.56804 11.9244L10.9822 13.3386L20.8552 3.46568V9.47335H22.8552V1.05151V0.0515137H21.8552H13.4334V2.05151ZM1.85303 3.20964H6.0643V5.20964H2.85303V20.0533H17.6967V16.8426H19.6967V21.0533V22.0533H18.6967H1.85303H0.853027V21.0533V4.20964V3.20964H1.85303Z" fill="#DB4747" />
          </svg>
        </a>
      </div>
      <div className="col-md-6">
        <div className="row skills-container">
          <div className="skills-wrapper col-md-6">
            <svg width="47" height="47" viewBox="0 0 47 47" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="23.5" cy="23.5" r="23.5" fill="#22B07D" />
              <path d="M30.0314 20.8324L28.8321 26.3264H32.4834C33.0447 26.3264 33.4997 26.7813 33.4997 27.3426C33.4997 27.9038 33.0447 28.3588 32.4834 28.3588H28.3783L27.0683 34.4131C26.9626 34.9015 26.5307 35.25 26.031 35.25C25.3545 35.25 24.8506 34.6255 24.9937 33.9643L26.2066 28.3588H18.9783L17.6656 34.4256C17.5615 34.9067 17.136 35.25 16.6438 35.25C15.9774 35.25 15.481 34.6348 15.622 33.9834L16.839 28.3588H12.7662C12.205 28.3588 11.75 27.9038 11.75 27.3426C11.75 26.7813 12.205 26.3264 12.7662 26.3264H17.2928L18.4921 20.8324H14.5166C13.9553 20.8324 13.5003 20.3775 13.5003 19.8162C13.5003 19.255 13.9553 18.8 14.5166 18.8H18.9459L20.2911 12.5747C20.3951 12.0935 20.8207 11.75 21.313 11.75C21.9794 11.75 22.4757 12.365 22.335 13.0164L21.0852 18.8H28.3134L29.656 12.5872C29.7616 12.0987 30.1936 11.75 30.6934 11.75C31.3699 11.75 31.8737 12.3743 31.7308 13.0355L30.4852 18.8H34.2338C34.795 18.8 35.25 19.255 35.25 19.8162C35.25 20.3775 34.795 20.8324 34.2338 20.8324H30.0314ZM27.8597 20.8324H20.6314L19.4321 26.3264H26.6603L27.8597 20.8324Z" fill="#22B07D" />
            </svg>
            <span className="skills-headings">Languages</span>
            <div id="languages">
              {
                languages.map(language => (
                  <span key={language}>{language}</span>
                ))
              }
            </div>
          </div>
          <div className="skills-wrapper col-md-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="24" cy="24" r="24" fill="#376AED" />
              <rect x="12" y="12" width="24" height="24" stroke="#376AED" strokeWidth="1.5" strokeLinejoin="round" />
              <rect x="24" y="12" width="16.9705" height="16.9705" transform="rotate(45 24 12)" stroke="#376AED" strokeWidth="1.5" strokeLinejoin="bevel" />
            </svg>
            <span className="skills-headings">Frameworks</span>
            <div id="frameworksLibraries">
              {
                frameworksLibraries.map(fL => (
                  <span key={fL}>{fL}</span>
                ))
              }
            </div>
          </div>
          <div className="skills-wrapper col-md-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="24" cy="24" r="24" fill="#F19D2A" />
              <g clipPath="url(#clip0)">
                <path d="M23.999 12.9744C23.533 12.9744 23.1553 13.3521 23.1553 13.8181C23.1553 14.2841 23.533 14.6619 23.999 14.6619C26.7909 14.6619 29.0624 16.9329 29.0624 19.7244C29.0624 20.1903 29.4401 20.5681 29.9061 20.5681C30.3721 20.5681 30.7499 20.1903 30.7499 19.7244C30.7499 16.0024 27.7215 12.9744 23.999 12.9744Z" fill="#F19D2A" />
                <path d="M21.825 9.82661C18.013 10.6232 14.922 13.6845 14.1087 17.5203C13.422 20.7592 14.2682 24.0111 16.4306 26.4419C17.4875 27.6301 18.0937 29.1985 18.0937 30.7494V32.4369C18.0937 33.5596 18.8287 34.5134 19.8427 34.8438C20.1761 36.814 21.8861 38.3993 23.9999 38.3993C26.1132 38.3993 27.8237 36.8145 28.1572 34.8438C29.1712 34.5134 29.9062 33.5596 29.9062 32.4368V30.7493C29.9062 29.1954 30.5144 27.6458 31.6186 26.386C33.2348 24.5422 34.1249 22.1763 34.1249 19.7244C34.1249 13.3363 28.2778 8.47852 21.825 9.82661ZM23.9999 36.7119C22.9153 36.7119 21.9644 35.9655 21.6132 34.9625H26.3866C26.0355 35.9655 25.0846 36.7119 23.9999 36.7119ZM28.2187 32.4369C28.2187 32.9021 27.8402 33.2806 27.3749 33.2806H20.6249C20.1597 33.2806 19.7812 32.9021 19.7812 32.4369V31.5931H28.2187V32.4369ZM30.3496 25.2738C29.1728 26.6163 28.4488 28.2352 28.2651 29.9056H19.735C19.5515 28.2343 18.8293 26.5995 17.6915 25.3203C15.8894 23.2944 15.1852 20.579 15.7595 17.8703C16.43 14.7083 19.0062 12.1396 22.1702 11.4785C27.5716 10.3497 32.4374 14.406 32.4374 19.7244C32.4374 21.7669 31.696 23.7377 30.3496 25.2738Z" fill="#F19D2A" />
                <path d="M12.1313 19.7244H10.4438C9.97787 19.7244 9.6001 20.1021 9.6001 20.5681C9.6001 21.0341 9.97787 21.4119 10.4438 21.4119H12.1313C12.5973 21.4119 12.9751 21.0341 12.9751 20.5681C12.9751 20.1021 12.5973 19.7244 12.1313 19.7244Z" fill="#F19D2A" />
                <path d="M12.4808 15.5058L11.2875 14.3126C10.9581 13.9831 10.4238 13.9831 10.0943 14.3126C9.76479 14.6421 9.76479 15.1763 10.0943 15.5058L11.2875 16.699C11.617 17.0285 12.1513 17.0286 12.4808 16.699C12.8103 16.3695 12.8103 15.8353 12.4808 15.5058Z" fill="#F19D2A" />
                <path d="M12.4808 24.4376C12.1513 24.1081 11.617 24.1081 11.2875 24.4376L10.0943 25.6308C9.76479 25.9603 9.76479 26.4945 10.0943 26.824C10.4238 27.1535 10.958 27.1536 11.2875 26.824L12.4808 25.6308C12.8103 25.3013 12.8103 24.7671 12.4808 24.4376Z" fill="#F19D2A" />
                <path d="M37.5562 19.7244H35.8687C35.4027 19.7244 35.0249 20.1021 35.0249 20.5681C35.0249 21.0341 35.4027 21.4119 35.8687 21.4119H37.5562C38.0221 21.4119 38.3999 21.0341 38.3999 20.5681C38.3999 20.1021 38.0221 19.7244 37.5562 19.7244Z" fill="#F19D2A" />
                <path d="M37.9061 14.3126C37.5766 13.9831 37.0423 13.9831 36.7128 14.3126L35.5196 15.5058C35.1901 15.8353 35.1901 16.3695 35.5196 16.699C35.8491 17.0285 36.3833 17.0285 36.7128 16.699L37.9061 15.5058C38.2356 15.1763 38.2356 14.6421 37.9061 14.3126Z" fill="#F19D2A" />
                <path d="M37.9061 25.6308L36.7128 24.4376C36.3834 24.1081 35.8491 24.1081 35.5196 24.4376C35.1901 24.7671 35.1901 25.3013 35.5196 25.6308L36.7128 26.824C37.0423 27.1535 37.5765 27.1535 37.9061 26.824C38.2356 26.4945 38.2356 25.9603 37.9061 25.6308Z" fill="#F19D2A" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="28.8" height="28.8" fill="white" transform="translate(9.6001 9.6001)" />
                </clipPath>
              </defs>
            </svg>
            <span className="skills-headings">Skills</span>
            <div id="skills">
              {
              skills.map(skill => (
                <span key={skill}>{skill}</span>
              ))
              }
            </div>
          </div>
          <div className="skills-wrapper col-md-6">
            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle opacity="0.2" cx="24" cy="24" r="24" fill="#DB4747" />
              <g clipPath="url(#clip0)">
                <path d="M24.0001 36.7978C23.5901 36.7978 23.1948 36.6493 22.8867 36.3794C21.7233 35.3621 20.6016 34.4061 19.6119 33.5628L19.6069 33.5584C16.7054 31.0858 14.1999 28.9505 12.4565 26.847C10.5078 24.4955 9.6001 22.266 9.6001 19.8303C9.6001 17.4638 10.4115 15.2806 11.8848 13.6826C13.3757 12.0656 15.4213 11.175 17.6456 11.175C19.3081 11.175 20.8305 11.7006 22.1707 12.7371C22.847 13.2603 23.46 13.9005 24.0001 14.6474C24.5404 13.9005 25.1532 13.2603 25.8298 12.7371C27.1699 11.7006 28.6924 11.175 30.3548 11.175C32.5789 11.175 34.6248 12.0656 36.1156 13.6826C37.5889 15.2806 38.4001 17.4638 38.4001 19.8303C38.4001 22.266 37.4926 24.4955 35.5439 26.8468C33.8006 28.9505 31.2952 31.0856 28.3942 33.5579C27.4028 34.4026 26.2793 35.3601 25.1132 36.3799C24.8054 36.6493 24.4099 36.7978 24.0001 36.7978ZM17.6456 12.8621C15.8981 12.8621 14.2928 13.5595 13.125 14.826C11.9397 16.1116 11.2869 17.8888 11.2869 19.8303C11.2869 21.8788 12.0483 23.7109 13.7553 25.7706C15.4053 27.7615 17.8594 29.8529 20.7009 32.2745L20.7062 32.2789C21.6996 33.1255 22.8257 34.0853 23.9977 35.1101C25.1767 34.0833 26.3046 33.122 27.3 32.2741C30.1412 29.8525 32.5951 27.7615 34.2451 25.7706C35.9519 23.7109 36.7133 21.8788 36.7133 19.8303C36.7133 17.8888 36.0604 16.1116 34.8752 14.826C33.7076 13.5595 32.1021 12.8621 30.3548 12.8621C29.0747 12.8621 27.8994 13.269 26.8616 14.0715C25.9368 14.7869 25.2925 15.6913 24.9148 16.3241C24.7206 16.6495 24.3787 16.8438 24.0001 16.8438C23.6215 16.8438 23.2796 16.6495 23.0854 16.3241C22.7079 15.6913 22.0636 14.7869 21.1386 14.0715C20.1008 13.269 18.9255 12.8621 17.6456 12.8621Z" fill="#DB4747" />
              </g>
              <defs>
                <clipPath id="clip0">
                  <rect width="28.8001" height="28.8" fill="white" transform="translate(9.6001 9.6001)" />
                </clipPath>
              </defs>
            </svg>

            <span className="skills-headings">Soft Skills</span>
            <div id="skills">
              {
                softSkills.map(skill => (
                  <span key={skill}>{skill}</span>
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
