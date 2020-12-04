import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';
import { FaBars, FaHome, FaUser, FaEnvelope } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

import { colors } from '../constants/theme';

export default function RotatingNav() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Rotating Navigation | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        <Circle>
          <CircleContainer style={click ? { transform: 'rotate(-90deg)' } : undefined}>
            <BarButton>
              <FaBars onClick={() => setClick(true)} />
            </BarButton>
            <CrossButton>
              <ImCross onClick={() => setClick(false)} />
            </CrossButton>
          </CircleContainer>
        </Circle>
        <ContentContainer style={click ? { transform: 'rotate(-20deg)' } : undefined}>
          <Content>
            <Heading>Amazing Article!!!</Heading>
            <Paragraph margin={'2rem'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi
              quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
              repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
              Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam
              ipsam esse repellendus.
            </Paragraph>
            <Paragraph margin={'2rem'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi
              quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
              repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
              Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam
              ipsam esse repellendus.
            </Paragraph>
            <Image image={'batman.jpg'} margin={'2rem'} width={'90rem'} height={'50rem'}></Image>
            <Paragraph margin={'2rem'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi
              quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
              repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
              Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam
              ipsam esse repellendus.
            </Paragraph>
            <Paragraph margin={'2rem'}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi
              quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
              repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
              Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam
              ipsam esse repellendus.
            </Paragraph>
          </Content>
        </ContentContainer>
        <NavContainer>
          <ul>
            <li style={click ? { transform: 'translateX(0)', transitionDelay: '0.2s' } : undefined}>
              <FaHome />
              Home
            </li>
            <li style={click ? { transform: 'translateX(0)', transitionDelay: '0.2s' } : undefined}>
              <FaUser />
              About
            </li>
            <li style={click ? { transform: 'translateX(0)', transitionDelay: '0.2s' } : undefined}>
              <FaEnvelope />
              Contact
            </li>
          </ul>
        </NavContainer>
      </MyContainer>
    </>
  );
}

const MyContainer = styled.div`
  background-color: ${colors.darkSlate};
  overflow-x: hidden;
  z-index: -100;
`;

const ContentContainer = styled.div`
  transform-origin: top left;
  transition: all 0.5s linear;
  z-index: 1;
`;

const Content = styled.div`
  padding: 10rem;
  background-color: ${colors.contrast.primary};

  @media (max-width: 70rem) {
    max-width: 50rem;
  }

  @media (max-width: 40rem) {
    margin: 13rem 2rem;
  }
`;

const Heading = styled.h2<{ center?: boolean }>`
  font-size: 3rem;
  text-align: ${props => (props.center ? 'center' : 'match-parent')};
`;

const NavContainer = styled.nav`
  position: fixed;
  bottom: 10rem;
  ul {
    color: ${colors.contrast.primary};
    li {
      margin-left: 2rem;
      display: flex;
      align-items: center;
      font-weight: 800;
      margin-top: 3rem;
      font-size: 1.3rem;
      text-transform: uppercase;
      transform: translateX(-150%);
      transition: all 0.4s ease-in;
      &:nth-child(2) {
        margin-left: 4rem;
      }
      &:nth-child(3) {
        margin-left: 6rem;
      }
      svg {
        font-size: 1.8rem;
        margin: auto 2rem;
      }
    }
  }
`;

const Circle = styled.div`
  position: fixed;
  top: -10rem;
  left: -10rem;
  z-index: 1000;
`;

const CircleContainer = styled.div`
  width: 20rem;
  height: 20rem;
  border-radius: 50%;
  position: relative;
  background-color: ${colors.primary};
  transition: all 1s;
`;

const BarButton = styled.button`
  position: absolute;
  top: 13.5rem;
  left: 12.5rem;
  width: 2.5rem;
  height: 2.5rem;
  cursor: pointer;
  border-color: transparent;
  background-color: transparent;
  outline: none;

  &::active,
  &::focus {
    background-color: transparent;
    outline: none;
  }
  svg {
    fill: ${colors.contrast.primary};
    width: 2rem;
    height: 2rem;
  }
`;

const CrossButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  outline: none;
  border-color: transparent;
  position: absolute;
  top: 13.5rem;
  left: 4.5rem;
  width: 2.5rem;
  height: 2.5rem;
  svg {
    fill: ${colors.contrast.primary};
    width: 2rem;
    height: 2rem;
  }
`;

const Paragraph = styled.p<{ center?: boolean; margin?: string }>`
  margin: ${props => props.margin} auto;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: ${props => (props.center ? 'center' : ' left')};
`;

const Image = styled.div<{ image?: string; margin?: string; width?: string; height?: string }>`
  margin: ${props => props.margin} auto;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;
  text-align: center;

  @media (max-width: 70rem) {
    width: 45rem;
    height: 25rem;
  }
  @media (max-width: 40rem) {
    width: 35rem;
    height: 20rem;
  }

  @media (max-width: 26rem) {
    width: 25rem;
    height: 17rem;
  }

  @media (max-width: 19rem) {
    width: 15rem;
    height: 8rem;
  }
`;
