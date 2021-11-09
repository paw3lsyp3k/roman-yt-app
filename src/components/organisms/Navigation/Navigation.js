import React from 'react';
import { Logo, StyledLink, Wrapper } from '../Navigation/Navigation.styles';
import { NavLink } from 'react-router-dom';


const Navigation = () => {
  return (
    <Wrapper>
      <Logo>
        <h1>
          Study
          <br />
          Buddy
        </h1>
      </Logo>
      <StyledLink  className={(navData) =>  navData.isActive ? "active" : ''} to="/">Dashboard</StyledLink>
      <StyledLink  to="/add-user">Add user</StyledLink>
    </Wrapper>
  );
};

export default Navigation;