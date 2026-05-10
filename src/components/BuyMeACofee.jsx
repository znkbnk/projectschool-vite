import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background-color: #FFDD00;
  border-radius: 8px;
  padding: 10px;
  margin: 5px;
  text-decoration: none;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #ff813f;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.15);
  }
`;

const StyledIcon = styled.img`
  width: 25px;
  height: 25px;
`;

const Coffee = () => {
  return (
    <StyledButton 
      href='https://www.buymeacoffee.com/pgziotrqtz'
      target='_blank' 
      rel="noopener noreferrer"
    >
      <StyledIcon 
        src='https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg' 
        alt='Buy me a coffee'
      />
    </StyledButton>
  );
};

export default Coffee;