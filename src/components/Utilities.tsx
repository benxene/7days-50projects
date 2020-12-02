import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 100rem) {
    max-width: 90%;
  }
`;

export const Heading = styled.h1<{ center?: boolean }>`
  font-size: 5rem;
  font-weight: 800;
  text-align: ${props => (props.center ? 'center' : 'match-parent')};
`;

export const Section = styled.section<{ bgColor?: string; textColor?: string }>`
  padding: 5rem 0;
  margin: 5rem 0;
  background-color: ${props => props.bgColor || 'inherit'};
  color: ${props => props.textColor || 'inherit'};
`;
