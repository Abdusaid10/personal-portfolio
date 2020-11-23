import React from 'react';
import PropTypes from 'prop-types';
import '../assets/styles/Project.css';

const Project = ({ project }) => (
  <div id="projectWrapper">
    <img className="project-img col-md-6" src={`${project.image}`} alt={`${project.name}`} />
    <div className="col-md-6">
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <div>
        {
          project.stack.map(s => (
            <span key={s}>{s}</span>
          ))
        }
      </div>
      <button type="button">See project</button>
    </div>
  </div>
);

Project.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default Project;
