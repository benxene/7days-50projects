import { useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Section } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function AnimatedNav() {
  const [click, setClick] = useState<boolean>(true);

  return (
    <>
      <Head>
        <title>Animated NavBar | 7 days 50 projects</title>
      </Head>
      <MySection>
        <CenterNav style={click ? {} : { width: '6rem' }}>
          <CenterNavLinks
            style={
              click
                ? { width: '28rem', opacity: '1', transform: 'translateX(360deg)' }
                : { width: '0rem', opacity: '0', padding: '0', transform: 'translateX(0deg)' }
            }
          >
            <li>Home</li>
            <li>Works</li>
            <li>Contact</li>
            <li>About</li>
          </CenterNavLinks>
          <CloseButton onClick={() => setClick(!click)}>
            <Line click={click} />
          </CloseButton>
        </CenterNav>
      </MySection>
    </>
  );
}

const MySection = styled(Section)`
  margin: 0 auto;
  background-image: linear-gradient(
    to bottom,
    ${colors.lightSlate} 0%,
    ${colors.lightSlate} 50%,
    ${colors.primary} 50%,
    ${colors.primary} 100%
  );
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CenterNav = styled.nav`
  background-color: ${colors.contrast.primary};
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);
  width: 35rem;
  height: 6rem;
  border-radius: 3px;
  display: flex;
  flex-direction: row;
  transition: width 1s;
`;

const CenterNavLinks = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding-left: 1rem;
  transition: all 0.5s linear;
  overflow: hidden;

  li {
    margin: 1rem;
    cursor: pointer;
  }
`;

const CloseButton = styled.button`
  background-color: transparent;
  border: none;
  margin: auto;
  cursor: pointer;

  :focus,
  :active {
    border: none;
    outline: none;
  }
`;

const Line = styled.div<{ click: boolean }>`
  position: relative;
  height: 2.5rem;
  width: 2.5rem;
  ::before,
  ::after {
    content: '';
    background-color: ${colors.primary};
    width: 2rem;
    height: 2px;
    position: absolute;
    top: 0.8rem;
    left: 0.2rem;
    transform: ${props => (props.click ? 'rotate(-765deg) translateY(6px)' : 'none')};
    transition: transform 1s;
  }

  ::after {
    top: auto;
    bottom: 0.7rem;
    transform: ${props => (props.click ? 'rotate(765deg) translateY(-6px)' : 'none')};
  }
`;
