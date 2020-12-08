import Head from 'next/head';
import { useState, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';

export default function AutoTextEffect() {
  const [start, setStart] = useState<boolean>(true);

  useEffect(() => {
    if (start) {
      setTimeout(() => {
        setStart(false);
      }, 3000);
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
            <div>
              <div>
                <span>3</span>
                <span>2</span>
                <span>1</span>
                <span>0</span>
              </div>
              <h4>Get Ready</h4>
            </div>
          ) : (
            <Final start={start}>
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
    margin: 2rem 0;
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

const Final = styled.div<{ start: boolean }>`
  animation: show 0.2s ease-out;
  transition: ${props => (props.start ? 'scale(1)' : 'scale(0)')};

  & h1 {
    margin: 2rem 0;
    font-size: 3rem;
    font-weight: 500;
    color: #000;
  }
`;

const hide = keyframes`
  0% {
    transform: scale(1);
  }

  100% {
    transform: scale(0);
  }
`;

const show = keyframes`
  0% {
    transform: scale(0);
  }

  30% {
    transform: scale(1.4);
  }

  100% {
    transform: scale(1);
  }
`;

const goIn = keyframes`
  0% {
    transform: rotate(120deg);
  }

  30% {
    transform: rotate(-20deg);
  }

  60% {
    transform: rotate(10deg);
  }

  100% {
    transform: rotate(0deg);
  }
`;

const goOut = keyframes`
  0% {
    transform: rotate(0deg);
  }

  60% {
    transform: rotate(20deg);
  }

  100% {
    transform: rotate(-120deg);
  }
`;
