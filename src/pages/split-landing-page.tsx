import styled from 'styled-components';
import Head from 'next/head';
import { CenterContainer } from '../components/Utilities';
import { useEffect, useState } from 'react';
import { colors } from '../constants/theme';
import Button from '../components/RippleButton';

export default function SplitLandingPage() {
  const [cursorInLeft, setCursorInLeft] = useState<boolean>(true);
  const [cursorInRight, setCursorInRight] = useState<boolean>();

  useEffect(() => {
    const left = document.querySelector('.left');

    left?.addEventListener('mouseenter', () => {
      setCursorInLeft(true);
    });
    left?.addEventListener('mouseleave', () => {
      setCursorInLeft(false);
    });

    const right = document.querySelector('.right');

    right?.addEventListener('mouseenter', () => {
      setCursorInRight(true);
    });
    right?.addEventListener('mouseleave', () => {
      setCursorInRight(false);
    });
  }, []);

  return (
    <>
      <Head>
        <title>Split Landing Page | 7 days 50 projects</title>
      </Head>
      <WholeContainer>
        <LeftContainer
          className='left'
          style={cursorInLeft ? { width: '75vw' } : cursorInRight ? { width: '25vw' } : {}}
        >
          <Title>PlayStation 5</Title>
          <Button>Buy Now</Button>
        </LeftContainer>
        <RightContainer
          className='right'
          style={cursorInRight ? { width: '75vw' } : cursorInLeft ? { width: '25vw' } : {}}
        >
          <Title>XBox Series X</Title>
          <Button>Buy Now</Button>
        </RightContainer>
      </WholeContainer>
    </>
  );
}

const WholeContainer = styled.div`
  width: 100vw;
  height: 100vh;
`;

const Title = styled.h1`
  font-size: 6rem;
  color: ${colors.contrast.primary};
  position: absolute;
  left: 50%;
  top: 20%;
  transform: translateX(-50%);
  white-space: nowrap;
`;

const LeftContainer = styled(CenterContainer)`
  position: absolute;
  left: 0;
  width: 50vw;
  height: 100vh;
  background-image: linear-gradient(to bottom right, rgba(14, 21, 224, 0.5), rgba(41, 39, 144, 0.2)), url(ps5.png);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  transition: width 1s;
`;

const RightContainer = styled(CenterContainer)`
  position: absolute;
  right: 0;
  width: 50vw;
  height: 100vh;
  background-image: linear-gradient(to bottom left, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.4)), url(xbox.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  transition: width 1s;
  overflow: hidden;
`;
