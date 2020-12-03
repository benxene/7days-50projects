import Head from 'next/head';
import styled, { keyframes } from 'styled-components';
import { RiHome5Line, RiBuildingLine, RiArticleLine, RiUser2Line } from 'react-icons/ri';

import { colors, sizes } from '../constants/theme';
import { useState } from 'react';

export default function MobileTabNavigation() {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <>
      <Head>
        <title>Mobile tabbed navigation</title>
      </Head>
      <Container>
        <Frame>
          <Display>{activeTab === 1 && <Content>Home page</Content>}</Display>
          <Display>{activeTab === 2 && <Content>Work page</Content>}</Display>
          <Display>{activeTab === 3 && <Content>Blogs page</Content>}</Display>
          <Display>{activeTab === 4 && <Content>About us</Content>}</Display>

          <TabNav>
            <NavItem active={activeTab === 1} onClick={() => setActiveTab(1)}>
              <RiHome5Line />
              <p>Home</p>
            </NavItem>
            <NavItem active={activeTab === 2} onClick={() => setActiveTab(2)}>
              <RiBuildingLine />
              <p>Work</p>
            </NavItem>
            <NavItem active={activeTab === 3} onClick={() => setActiveTab(3)}>
              <RiArticleLine />
              <p>Blogs</p>
            </NavItem>
            <NavItem active={activeTab === 4} onClick={() => setActiveTab(4)}>
              <RiUser2Line />
              <p>About</p>
            </NavItem>
          </TabNav>
        </Frame>
      </Container>
    </>
  );
}

const Frame = styled.main`
  height: 56rem;
  width: 30rem;
  border: 4px solid ${colors.darkSlate};
  border-radius: ${sizes.radius.medium};
  position: relative;
  overflow: hidden;
`;

const Container = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: linear-gradient(to bottom right, #ff8cba, #ffb5d3);
`;

const Display = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: ${colors.primary};
`;

const transition = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const Content = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: grid;
  place-content: center;
  place-items: center;
  animation: ${transition} 0.4s;
  font-size: 4rem;
  color: ${colors.contrast.primary};
  z-index: 10;
  font-weight: 800;
`;

const TabNav = styled.div`
  position: absolute;
  z-index: 100;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 1rem;
  background-color: ${colors.darkSlate};
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 1rem;
  place-items: center;
`;

const NavItem = styled.div<{ active: boolean }>`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1.6rem 1.2rem;
  grid-gap: 0.5rem;
  color: ${props => (props.active ? colors.secondary : colors.lightSlate)};
  font-weight: ${props => (props.active ? 800 : 400)};
  place-items: center;
  cursor: pointer;

  & > p {
    font-size: 1.2rem;
  }
`;
