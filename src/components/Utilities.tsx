import styled from 'styled-components';
import { colors } from '../constants/theme';

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 100rem) {
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
  padding: 5rem 0;
  margin: 5rem 0;
  background-color: ${props => props.bgColor || 'inherit'};
  color: ${props => props.textColor || 'inherit'};
`;

export const CenterContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #ff8cba, #ffb5d3);
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
  padding: 0.6rem 1rem;
  font-family: inherit;
  font-size: inherit;
  font-weight: 800;
  text-transform: uppercase;
  cursor: pointer;
`;
