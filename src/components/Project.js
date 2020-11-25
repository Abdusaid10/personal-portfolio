import React from 'react';
import PropTypes from 'prop-types';

const Project = ({ project }) => (
  <div id="projectWrapper">
    <img className="project-img col-md-6" src={`${project.image}`} alt={`${project.name}`} />
    <div className="project-info col-md-6">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div id="stackWrapper">
        {
          project.stack.map(s => (
            <span key={s}>{s}</span>
          ))
        }
      </div>
      <button id="seeProject" type="button">
        <spna className="p-1 m-1">See project</spna>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M18.7423 10.6265L13.4834 5.36758L14.8976 3.95337L22.5707 11.6265L14.8976 19.2996L13.4834 17.8854L18.7422 12.6265H2L2 10.6265H18.7423Z" fill="white" />
        </svg>
      </button>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
