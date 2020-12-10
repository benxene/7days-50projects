import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

import { colors } from '../constants/theme';

export default function AutoTextEffect() {
  const [start, setStart] = useState<boolean>(true);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setStart(false);
      }, 3500);
    }
  }, [start]);

  return (
    <>
      <Head>
        <title>Animated Countdown | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          {start ? (
            <>
              <Count>
                <span>3</span>
                <span>2</span>
                <span>1</span>
                <span>0</span>
              </Count>
              <h4 style={{ margin: '0' }}>Get Ready</h4>
            </>
          ) : (
            <Final>
              <h1>GO</h1>
              <button onClick={() => setStart(true)}>Replay</button>
            </Final>
          )}
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: #fff;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  & h1 {
    margin: 3rem 0;
    font-size: 3rem;
    font-weight: 500;
    color: #000;
  }

  & h4 {
    margin: 3rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    color: #000;
  }
`;

const show = keyframes`
  0% {
    transform: scale(0);
  }

  100% {
    transform: scale(1);
  }
`;

const goIn = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(120deg);
  }

  30% {
    transform: translate(-50%, -50%) rotate(-20deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(10deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
`;

const goOut = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }

  60% {
    transform: translate(-50%, -50%) rotate(20deg);
  }

  100% {
    transform: translate(-50%, -50%) rotate(-120deg);
`;

const Count = styled.div`
  position: relative;
  width: 10rem;
  height: 4rem;
  overflow: hidden;

  & span {
    font-size: 4rem;
    color: ${colors.primary};
    position: absolute;
    top: 40%;
    left: 50%;
    opacity: 1;
    transform: translate(-50%, -50%) rotate(120deg);
    transform-origin: bottom center;

    &:nth-of-type(1) {
      animation: ${goIn} 0.5s ease-in-out, ${goOut} 0.5s ease-out 0.5s;
      animation-fill-mode: forwards;
    }

    &:nth-of-type(2) {
      animation: ${goIn} 0.5s ease-in-out 1s, ${goOut} 0.5s ease-out 1.5s;
      animation-fill-mode: forwards;
    }

    &:nth-of-type(3) {
      animation: ${goIn} 0.5s ease-in-out 2s, ${goOut} 0.5s ease-out 2.5s;
      animation-fill-mode: forwards;
    }

    &:nth-of-type(4) {
      animation: ${goIn} 0.5s ease-in-out 3s, ${goOut} 0.5s ease-out 3.5s;
      animation-fill-mode: forwards;
    }
  }
`;

const Final = styled.div`
  animation: ${show} 0.5s ease-in-out;

  & h1 {
    margin: 2rem 0;
    font-size: 3rem;
    font-weight: 500;
    color: #000;
  }
`;
