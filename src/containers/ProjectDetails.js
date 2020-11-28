import React from 'react';
import { Modal } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ProjectDetails = ({ project }) => (
  <Modal
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
  >
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        {project.name}
      </Modal.Title>
    </Modal.Header>
    <Modal.Body>
      <div className="model">
        {
          project.stack.map(s => (
            <span key={s}>{s}</span>
          ))
        }
        <div className="d-flex flex-row">
          <img src={project.img} alt={project.name} />
          <div>
            <p>{project.description}</p>
            <div>
              <button>
                See Live
              </button>
            </div>
          </div>
        </div>
      </div>
    </Modal.Body>
  </Modal>
);

ProjectDetails.propTypes = {
  project: PropTypes.instanceOf(Object).isRequired,
};

export default ProjectDetails;
