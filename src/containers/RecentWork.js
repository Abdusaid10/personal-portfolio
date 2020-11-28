import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Project from '../components/Project';
import weatherApp1 from '../assets/imgs/weatherApp1.png';
import weatherApp2 from '../assets/imgs/weatherApp2.png';
import devocean from '../assets/imgs/devocean_feed.png';
import '../assets/styles/Project.css';

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      description: 'Weather app shows the weather information of the user\'s city when the page is loaded, the user can also search for and view the forecast in cities worldwide.',
      image: `${weatherApp1}`,
      stack: ['HTML', 'CSS', 'JavaScript'],
    },
    {
      id: 2,
      name: 'Devocean',
      description: 'Social network for remote developers and learners',
      image: `${devocean}`,
      stack: ['Rails', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 3,
      name: 'Bookstore',
      description: 'lorem ipsum',
      image: `${weatherApp2}`,
      stack: ['Rails', 'React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 4,
      name: 'Meal Recipes',
      description: 'Get the recipe and instructions for the meal you want to cook',
      image: `${weatherApp2}`,
      stack: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    },
    {
      id: 5,
      name: 'Car Booking API',
      description: 'REST API with JWT authentication and two types of users. Admin users can perform CRUD operations on the following data:  car, category, manufacturer, while signed-up users can only book a car.',
      image: `${weatherApp2}`,
      stack: ['Rails', 'React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
    },
  ];

  return (
    <div id="projectsContainer">
      <Router>
        {
          projects.map(project => (
            <Project key={project.name} project={project} />
          ))
        }
      </Router>
    </div>
  );
};

export default RecentWork;
