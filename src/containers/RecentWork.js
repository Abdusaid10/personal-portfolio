import React from 'react';
import Project from '../components/Project';
import weatherApp1 from '../assets/imgs/weatherApp1.png';
import weatherApp2 from '../assets/imgs/weatherApp2.png';

const RecentWork = () => {
  const projects = [
    {
      name: 'Weather App',
      description: 'lorem ipsum',
      image: `${weatherApp1}`,
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      name: 'Weather1 App',
      description: 'lorem ipsum',
      image: `${weatherApp2}`,
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  return (
    <div id="projects-container">
      {
        projects.map(project => (
          <Project key={project.name} project={project} />
        ))
      }
    </div>
  );
};

export default RecentWork;
