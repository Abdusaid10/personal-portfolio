import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const NavMenuStyle = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: row nowrap;

  .menu-item {
    padding: 18px 10px;
    margin: 0;
  }

  .menu-item a {
    text-decoration: none;
    color: white;
  }

  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #1B1B1E;
    position: fixed;
    top: 0;
    right: 0;
    height: 100vh;
    width: 300px;
    padding-top: 3.5rem;
    margin: 0;
    transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};
    transition: transform 0.3s ease-in-out;

    .menu-item {
      color: #fff;
      cursor: pointer;
    }
  }
`;

const NavMenu = ({ open }) => (
  <NavMenuStyle open={open}>
    <li className="menu-item">
      <a href="#portfolio">Portfolio</a>
    </li>
    <li className="menu-item">
      <a href="#projectsContainer">Recent Work</a>
    </li>
    <li className="menu-item">
      <a href="#about">About</a>
    </li>
    <li className="menu-item">
      <a href="#contacts">Contact</a>
    </li>
  </NavMenuStyle>
);

NavMenu.propTypes = {
  open: PropTypes.bool,
};

NavMenu.defaultProps = {
  open: false,
};

export default NavMenu;
