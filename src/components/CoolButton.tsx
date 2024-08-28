'use client';

import React from 'react';
import styled, { keyframes } from 'styled-components';

const glowAnimation = keyframes`
  0% {
    box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff;
  }
  50% {
    box-shadow: 0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff;
  }
  100% {
    box-shadow: 0 0 5px #00ffff, 0 0 10px #00ffff, 0 0 15px #00ffff, 0 0 20px #00ffff;
  }
`;

const StyledButton = styled.button`
  padding: 15px 30px;
  font-size: 18px;
  color: #ffffff;
  background-color: #1a1a1a;
  border: 2px solid #00ffff;
  border-radius: 30px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

  &:before {
    content: '';
    position: absolute;
    top: -2px;
    left: -2px;
    right: -2px;
    bottom: -2px;
    z-index: -1;
    background-color: #00ffff;
    filter: blur(10px);
    opacity: 0.7;
    animation: ${glowAnimation} 3s ease-in-out infinite;
  }

  &:hover {
    transform: scale(1.05);
    box-shadow: 0 0 15px #00ffff;
  }

  &:active {
    transform: scale(0.95);
  }
`;

const CoolButton = ({ children, onClick, className}: {children: any, onClick: any, className: any}) => {
  return <StyledButton className={className} onClick={onClick}>{children}</StyledButton>;
};

export default CoolButton;