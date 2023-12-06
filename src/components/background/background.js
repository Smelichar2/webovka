import React from 'react';
import styled from 'styled-components';

const StyledBackground = styled.div`
  background-color: #0E0F19;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Background = ({ children }) => {
    return <StyledBackground>{children}</StyledBackground>;
};

export default Background;