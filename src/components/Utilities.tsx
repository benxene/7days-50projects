import styled, { keyframes } from 'styled-components';
import { colors, sizes } from '../constants/theme';

export const Container = styled.div<{ maxWidth?: string }>`
  max-width: ${props => props.maxWidth || '100rem'};
  margin: 0 auto;

  @media (max-width: 80rem) {
    max-width: 85%;
  }

  @media (max-width: 60rem) {
    max-width: 90%;
  }
`;

export const Heading = styled.h1<{ center?: boolean; small?: boolean }>`
  font-size: ${props => (props.small ? '3.5rem' : '5rem')};
  font-weight: 800;
  margin-bottom: 2rem;
  text-align: ${props => (props.center ? 'center' : 'match-parent')};
`;

export const Section = styled.section<{ bgColor?: string; textColor?: string }>`
  padding: 10rem 0;
  background-color: ${props => props.bgColor || 'inherit'};
  color: ${props => props.textColor || 'inherit'};
`;

export const CenterContainer = styled.div<{
  color?: 'primary' | 'secondary' | 'slate' | string;
}>`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => {
    switch (props.color) {
      case 'primary':
        return 'linear-gradient(to bottom right, #2d6cdf, #98bcff)';
      case 'slate':
        return 'linear-gradient(to bottom right, #292929, #111)';
      case 'secondary':
        return 'linear-gradient(to bottom right, #ff8cba, #ffb5d3)';
      default:
        return props.color;
    }
  }};
`;

export const Button = styled.button<{ color: string }>`
  display: block;
  background-color: ${props => {
    switch (props.color) {
      case 'primary':
        return colors.primary;
      case 'secondary':
        return colors.secondary;
      default:
        return props.color;
    }
  }};
  border: 1px solid currentColor;
  border-radius: ${sizes.radius.small};
  padding: 0.6rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
`;

const fadeInOut = keyframes`
  0% {
    bottom: 0;
    opacity: 0;
    visibility: hidden;
  }

  50% {
    bottom: 6rem;
    opacity: 1;
    visibility: visible;
  }

  100% {
    bottom: 0;
    opacity: 0;
    visibility: hidden;
  }
`;

export const Alert = styled.div<{ bgColor: string; color: string }>`
  min-width: 40rem;
  background-color: ${props => props.bgColor};
  color: ${props => props.color};
  border-radius: ${sizes.radius.small};
  position: fixed;
  left: 50%;
  padding: 1rem;
  transform: translateX(-50%);
  text-align: center;
  transition: all 0.4s;
  visibility: hidden;
  animation: ${fadeInOut} 3s;
`;

export const ThemedCenterContainer = styled(CenterContainer)<{ dark: boolean }>`
  background-color: ${({ dark }) => (dark ? colors.darkSlate : '#fff')};
  color: ${({ dark }) => (dark ? colors.contrast.primary : colors.darkSlate)};
  transition: all 0.4s;
`;
