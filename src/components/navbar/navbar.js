import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  display: flex;
  justify-content: flex-end; /* Zarovná na pravou stranu */
  background-color: #0E0F19;
  padding: 15px;
`;
const StyledWhite = styled.span`
  color: #fff;
`;

const StyledGreen = styled(StyledWhite)`
  color: #35FF69;
`;

const StyledBlue = styled(StyledWhite)`
  color: #5F4BB6;
`;

const StyledPink = styled(StyledWhite)`
  color: #CF1259;
`;
const StyledLink = styled(Link)`
  color: #ffffff;
  text-decoration: none;
  font-size: 24px;
  margin: 0 15px;
  transition: color 0.3s ease-in-out;
  

  &:hover {
    color: #CF1259;
  ;
  }
`;

const Navbar = () => {
    return (
        <StyledNavbar>
            <StyledLink to="/"><StyledPink style={{ fontSize: '24px' }}>&lt;</StyledPink>Home<StyledPink style={{ fontSize: '24px' }}>&gt;</StyledPink></StyledLink>
            <StyledLink to="/about"><StyledPink style={{ fontSize: '24px' }}>&lt;</StyledPink>About<StyledPink style={{ fontSize: '24px' }}>&gt;</StyledPink></StyledLink>
            <StyledLink to="/projects"><StyledPink style={{ fontSize: '24px' }}>&lt;</StyledPink>Projects<StyledPink style={{ fontSize: '24px' }}>&gt;</StyledPink></StyledLink>
            <StyledLink to="/contact"><StyledPink style={{ fontSize: '24px' }}>&lt;</StyledPink>Contact<StyledPink style={{ fontSize: '24px' }}>&gt;</StyledPink></StyledLink>
        </StyledNavbar>
    );
};

export default Navbar;