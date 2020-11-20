import React, { useState } from 'react';
import styled from 'styled-components';
import NavMenu from './NavMenu';

const StyledBurger = styled.div`
  display: none;
  position: fixed;
  top: 15px;
  right: 20px;
  width: 1.5rem;
  height: 1.5rem;
  z-index: 20;

  div {
    width: 1.8rem;
    height: .18rem;
    ${'' /* background-color: rgb(186, 191, 199); */}
    background-color: ${({ open }) => (open ? '#ccc' : 'rgb(186, 191, 199)')};
    border-radius: 10px;
    transform-origin: 1px;
    transition: all 0.3s linear;

    &:nth-child(1) {
      transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
    }

    &:nth-child(2) {
      transform: ${({ open }) => (open ? 'translateX(100%)' : 'translateX(0)')};
      opacity: ${({ open }) => (open ? 0 : 1)};
    }

    &:nth-child(3) {
      transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')}
    }
  }

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
  }
`;

const Burger = () => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    // eslint-disable-next-line jsx-a11y/interactive-supports-focus
    <div>
      <StyledBurger open={open} onClick={() => handleClick()}>
        <div />
        <div />
        <div />
      </StyledBurger>
      <NavMenu open={open} />
    </div>
  );
};

export default Burger;
