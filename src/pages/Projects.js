import React from 'react';
import styled from 'styled-components';
import logo1 from '../fotky/logo1.png';
import logo2 from '../fotky/logo2.png';
import logo3 from '../fotky/logo3.png';
import logo4 from '../fotky/logo4.png';

const StyledPage = styled.div`
  color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* Nastavení výšky na 100% viewportu pro vyplnění celé stránky */
`;

const StyledTitle = styled.p`
  font-size: 50px;
  margin-top: 50px;
  color: #fff;
`;

const StyledRectangle = styled.div`
  background-color: #140B29;
  padding: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin-top: 200px; /* Posunutí nahoru o 20px */
`;

const StyledLogo = styled.img`
  max-width: 150px;
  max-height: 150px;
  margin: 0 50px; /* Větší mezery mezi obrázky */
  
`;
const StyledWhite = styled.span`
  color: #fff;
`;

const StyledGreen = styled(StyledWhite)`
  color: #35FF69;
`;

const StyledBlue = styled(StyledWhite)`
  color: #5F4BB6;
  font-size: 40px
`;

const StyledPink = styled(StyledWhite)`
  color: #CF1259;
  font-size: 40px
`;


const Projects = () => {
    return (
        <StyledPage>
            <StyledPink>Here are some </StyledPink>
            <StyledBlue>of my Projects </StyledBlue>
            <StyledRectangle>
                <StyledLogo src={logo1} alt="logo1.png" />
                <StyledLogo src={logo2} alt="logo2.png" />
                <StyledLogo src={logo3} alt="logo3.png" />
                <StyledLogo src={logo4} alt="logo4.png" />
            </StyledRectangle>
        </StyledPage>
    );
};

export default Projects;
