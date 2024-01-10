import React from 'react';
import styled from 'styled-components';
import fotka from '../fotky/foteckak.JPG';

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 42px;
  text-align: left;
  margin-bottom: 30px;
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

const StyledImage = styled.img`
  width: 500px;
  margin-right: 20px;
`;

const StyledRectangle = styled.div`
  background-color: #140B29;
  padding: 40px; /* Zvětšil jsem padding */
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  
`;

const Home = () => {
    return (
        <div>
            <StyledDiv>
                <StyledImage src={fotka} alt="foteckak.JPG" />
                <div>
                    <StyledGreen>Lorem ipsum dolor </StyledGreen>
                    <StyledWhite>sit amet,</StyledWhite>
                    <br />
                    <StyledWhite>consectetuer </StyledWhite>
                    <StyledBlue>adipiscing elit.</StyledBlue>
                    <br />
                    <StyledWhite>Praesent in mauris eu tortor</StyledWhite>
                    <br />
                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                </div>
            </StyledDiv>
            <StyledRectangle>
                <div>
                    <StyledWhite style={{ fontSize: '72px' }}>25</StyledWhite> {/* Zvětšil jsem font o 3x */}
                    <StyledPink style={{ fontSize: '24px' }}>Projects to do</StyledPink> {/* Zvětšil jsem font o 2x */}
                    <br />
                    <StyledPink style={{ fontSize: '24px' }}>&lt;</StyledPink><StyledGreen style={{ fontSize: '24px' }}>currently working on</StyledGreen><StyledPink style={{ fontSize: '24px' }}>/&gt;</StyledPink>
                </div>
                <div>
                    <StyledWhite style={{ fontSize: '72px' }}>55+</StyledWhite>
                    <StyledGreen style={{ fontSize: '24px' }}>Projects </StyledGreen>
                    <StyledPink style={{ fontSize: '24px' }}>done</StyledPink>
                </div>
                <div>
                    <StyledWhite style={{ fontSize: '72px' }}>10</StyledWhite>
                    <StyledGreen style={{ fontSize: '24px' }}>years of </StyledGreen>
                    <StyledPink style={{ fontSize: '24px' }}>experience</StyledPink>
                </div>
            </StyledRectangle>
        </div>
    );
};

export default Home;
