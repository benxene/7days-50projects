import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import { colors } from '../constants/theme';

export default function RippleButton() {
  const [rippleVisible, setRippleVisibility] = useState<boolean>(false);
  const [rippleCoOrdinates, setCoOrdinates] = useState({ x: 0, y: 0 });

  const addRipple = (event: any) => {
    const { clientX, clientY } = event;
    const { offsetTop, offsetLeft } = event.target;
    setRippleVisibility(false);
    setRippleVisibility(true);
    setCoOrdinates({ x: clientX - offsetLeft, y: clientY - offsetTop });

    setTimeout(() => setRippleVisibility(false), 400);
  };

  return (
    <Button onClick={addRipple}>
      {rippleVisible && <Ripple x={rippleCoOrdinates.x} y={rippleCoOrdinates.y} />}
      Click me
    </Button>
  );
}

const Button = styled.button`
  border: none;
  background-color: ${colors.primary};
  border-radius: 0.2rem;
  font: inherit;
  font-weight: 800;
  color: ${colors.contrast.primary};
  text-transform: uppercase;
  box-shadow: 0 0.3rem 0.5rem rgba(0, 0, 0, 0.4);
  padding: 1rem 2rem;
  letter-spacing: 0.2em;
  cursor: pointer;
  position: relative;
  overflow: hidden;

  &:focus {
    outline: none;
  }
`;

const rippleAnimation = keyframes`
  from {
    opacity: 1;
    transform: translate(-50%, -50%) scale(0.1);
  }

  to {
    opacity: 0;
    transform: translate(-50%, -50%) scale(5);
  }
`;

const Ripple = styled.div<{ x: number; y: number }>`
  border-radius: 50%;
  background-color: rgba(255, 255, 255, 0.6);
  position: absolute;
  top: ${props => props.y}px;
  left: ${props => props.x}px;
  width: 5rem;
  height: 5rem;
  transform: translate(-50%, -50%) scale(0);
  animation: ${rippleAnimation} 0.6s;
`;
