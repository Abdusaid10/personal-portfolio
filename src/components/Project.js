import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div id="projectWrapper">
    <img className="project-img" src={`${project.image}`} alt={`${project.name}`} />
    <div className="project-info">
      <h2>{project.name}</h2>
      <div id="stackWrapper">
        {
          project.stack.map(s => (
            <span key={s}>{s}</span>
          ))
        }
      </div>
      <p>{project.description}</p>
      <div className="links">
        <a href={project.srcLink} className="see-project" target="_blank" rel="noreferrer">
          <spna className="p-1 m-1">See source</spna>
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7423 10.6265L13.4834 5.36758L14.8976 3.95337L22.5707 11.6265L14.8976 19.2996L13.4834 17.8854L18.7422 12.6265H2L2 10.6265H18.7423Z" fill="white" />
          </svg>
        </a>
        <a href={project.liveLink} className="see-project" target="_blank" rel="noreferrer">
          <spna className="p-1 m-1">See live</spna>
          <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M18.7423 10.6265L13.4834 5.36758L14.8976 3.95337L22.5707 11.6265L14.8976 19.2996L13.4834 17.8854L18.7422 12.6265H2L2 10.6265H18.7423Z" fill="white" />
          </svg>
        </a>
      </div>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
