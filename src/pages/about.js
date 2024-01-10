import React from 'react';
import styled from 'styled-components';
import "./about.css"

const StyledDiv = styled.div`
        color: #fff;
        font-size: 18px;
        text-align: left;
        margin-left: 100px;
        margin-bottom: 30px;
`;
const StyledHeading = styled.p`
        font-size: 46px;
        margin-bottom: 20px;
        color: #fff;
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


const About = () => {
        return (
            <div className="skills">
                <div className="skills-box">
                    <div className="purple-box">WEB CODING</div>
                    <div className="purple-box">DESIGN</div>
                </div>
                <StyledDiv>
                    <StyledHeading className="custom-heading">My name is<br /> Simon Melichar</StyledHeading>
                    <StyledGreen>Lorem ipsum dolor </StyledGreen>
                    <StyledWhite>sit amet,</StyledWhite>

                    <StyledWhite>consectetuer </StyledWhite>
                    <br />
                    <StyledBlue>adipiscing elit.</StyledBlue>

                    <StyledWhite>Praesent in mauris eu tortor</StyledWhite>
                    <br />
                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                    <br />

                    <br />
                    <StyledGreen>Lorem ipsum dolor </StyledGreen>
                    <StyledWhite>sit amet,</StyledWhite>
                    <StyledWhite>consectetuer </StyledWhite>
                    <br />
                    <StyledBlue>adipiscing elit.</StyledBlue>
                    <StyledWhite>Praesent in mauris eu tortor</StyledWhite>
                    <br />
                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                    <StyledWhite>Praesent in mauris eu <StyledWhite>
                            < br/>
                    </StyledWhite>tortor</StyledWhite>

                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                    <br />

                    <br />


                    <StyledGreen>Lorem ipsum dolor </StyledGreen>
                    <StyledWhite>sit amet,</StyledWhite>
                    <StyledWhite>consectetuer </StyledWhite>
                    <br />
                    <StyledBlue>adipiscing elit.</StyledBlue>
                    <StyledWhite>Praesent in mauris eu tortor</StyledWhite>
                    <br />
                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                    <StyledWhite>Praesent in mauris eu <StyledWhite>
                            < br/>
                    </StyledWhite>tortor</StyledWhite>
                    <StyledWhite>porttitor </StyledWhite>
                    <StyledPink>accumsan.</StyledPink>
                    <StyledGreen>Lorem ipsum dolor </StyledGreen>
                    <br />
                    <StyledWhite>sit amet, </StyledWhite>
                    <StyledWhite>consectetuer </StyledWhite>

                    <StyledBlue>adipiscing elit.</StyledBlue>

                </StyledDiv>
            </div>


        );
};


export default About;