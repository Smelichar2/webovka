import React from 'react';
import styled from 'styled-components';

const StyledForm = styled.form`
  background-color: #140B29;
  padding: 40px;
  border-radius: 10px;
  width: 800px;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  height: 400px; /* Zvýšení výšky formuláře */
`;

const StyledLabel = styled.label`
  font-size: 18px;
  margin-bottom: 8px;
  color: #fff;
`;

const StyledInput = styled.input`
  padding: 10px;
  margin-left: 10px;
  margin-bottom: 16px;
  font-size: 16px;
  width: calc(100% - 20px);
  border: none;
  border-radius: 5px;
  background-color: #0A0318;
  height: 40px; /* Zvýšení výšky vstupního pole */
`;

const StyledTextArea = styled.textarea`
  padding: 10px;
  background-color: #0A0318;
  margin-left: 10px;
  margin-bottom: 16px;
  font-size: 16px;
  width: calc(100% - 20px);
  height: 200px; /* Zvýšení výšky textového pole */
  border: none;
  border-radius: 5px;
`;

const StyledInputGroup = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

const StyledTitle = styled.p`
  font-size: 50px;
  margin-bottom: 20px;
  color: #fff;
  text-align: center;
`;

const ContactMe = () => {
    return (
        <div>
            <StyledTitle>Contact me</StyledTitle>
            <StyledForm>
                <StyledInputGroup>
                    <StyledLabel htmlFor="name">Name and Surname:</StyledLabel>
                    <StyledInput type="text" id="name" name="name" />
                </StyledInputGroup>

                <StyledInputGroup>
                    <StyledLabel htmlFor="email">Email address:</StyledLabel>
                    <StyledInput type="email" id="email" name="email" />
                </StyledInputGroup>

                <StyledInputGroup>
                    <StyledLabel htmlFor="message">Message:</StyledLabel>
                    <StyledTextArea id="message" name="message" />
                </StyledInputGroup>
            </StyledForm>
        </div>
    );
};

export default ContactMe;
