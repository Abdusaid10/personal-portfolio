import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Project from '../components/Project';
import weatherApp1 from '../assets/imgs/weatherApp1.png';
import bookstore from '../assets/imgs/bookstore.png';
import devocean from '../assets/imgs/devocean_feed.png';
import meals from '../assets/imgs/meals.png';
import carApi from '../assets/imgs/car-booking-api.png';
import carClient from '../assets/imgs/car-booking_client.png';
import '../assets/styles/project.css';

const RecentWork = () => {
  const projects = [
    {
      id: 1,
      name: 'Weather App',
      description: 'Weather app shows the weather information of the user\'s city when the page is loaded, the user can also search for and view the forecast in cities worldwide.',
      image: `${weatherApp1}`,
      stack: ['HTML', 'CSS', 'JavaScript'],
      srcLink: 'https://github.com/Abdusaid10/weatherApp',
      liveLink: 'https://github.com/Abdusaid10/weatherApp',
    },
    {
      id: 2,
      name: 'Devocean',
      description: 'Social network for remote developers and learners',
      image: `${devocean}`,
      stack: ['Rails', 'JavaScript', 'HTML', 'CSS'],
      srcLink: 'https://github.com/imhta/devocean',
      liveLink: 'https://dev-ocean.herokuapp.com/',
    },
    {
      id: 3,
      name: 'Bookstore',
      description: 'Keep track of your books that you have read, or currently reading, or going to read',
      image: `${bookstore}`,
      stack: ['Ruby', 'Rails', 'React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      srcLink: 'https://github.com/Abdusaid10/react-bookstore',
      liveLink: 'https://react-bookstore-270720.herokuapp.com/',
    },
    {
      id: 4,
      name: 'Meal Recipes',
      description: 'Get the recipe and instructions for the meal you want to cook',
      image: `${meals}`,
      stack: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      srcLink: 'https://github.com/Abdusaid10/react-capstone',
      liveLink: 'https://react-meal-recipes.herokuapp.com/',
    },
    {
      id: 5,
      name: 'Car Booking API',
      description: 'REST API with JWT authentication and two types of users. Admin users can perform CRUD operations on the following data:  car, category, manufacturer, while signed-up users can only book a car.',
      image: `${carApi}`,
      stack: ['Ruby', 'Rails'],
      srcLink: 'https://github.com/Abdusaid10/car-booking-api',
      liveLink: 'https://car-booking-api-app.herokuapp.com/',
    },
    {
      id: 6,
      name: 'Car Booking',
      description: 'The client-side for the Car Booking REST API. Allows users to signup, book a car, and access the history of bookings.',
      image: `${carClient}`,
      stack: ['React', 'Redux', 'JavaScript', 'HTML', 'CSS'],
      srcLink: 'https://github.com/Abdusaid10/car-booking-client',
      liveLink: 'https://car-rental-client.netlify.app/',
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
