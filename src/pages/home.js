// Home.js
import React from 'react';
import styled from 'styled-components';

const StyledHome = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh; /* Nastaví výšku na 100% výšky okna pro centrování obsahu */
  text-align: center;
`;

const StyledText = styled.p`
  color: #fff;
  font-size: 18px;
  margin: 10px 0;
`;

const StyledGreen = styled(StyledText)`
  color: green;
`;

const StyledWhite = styled(StyledText)`
  color: #fff;
`;

const StyledDarkBlue = styled(StyledText)`
  color: #001f3f;
`;

const StyledPink = styled(StyledText)`
  color: #ff69b4;
`;

const Home = () => {
    return (
        <StyledHome>
            <p><StyledGreen>Lorem ipsum dolor</StyledGreen>
            <StyledWhite>sit amet, consectetuer</StyledWhite>
            <StyledDarkBlue>adipiscing elit.</StyledDarkBlue>
            <StyledWhite>Praesent in mauris eu tortor porttitor</StyledWhite>
            <StyledPink>accumsan.</StyledPink></p>
        </StyledHome>
    );
};

export default Home;
