import styled from 'styled-components';

export const Container = styled.div`
  max-width: 120rem;
  margin: 0 auto;

  @media (max-width: 100rem) {
    max-width: 90%;
  }
`;

export const Heading = styled.h1`
  font-size: 5rem;
  font-weight: 800;
`;

export const Section = styled.section`
  padding: 5rem 0;
  margin: 5rem 0;
`;
