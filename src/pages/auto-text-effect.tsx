import Head from 'next/head';
import { useState, useEffect, useRef, useCallback } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

const text = 'We Love Programming!';

export default function AutoTextEffect() {
  const [speed, setSpeed] = useState(300);

  const [limit, setLimit] = useState(1);

  const contentRef = useRef<any>(null);
  const countRef = useRef<number>(1);
  const intervalRef = useRef<number | null>(null);

  function writeText() {
    contentRef.current.innerText = text.slice(0, countRef.current);

    countRef.current++;

    if (countRef.current > text.length) {
      countRef.current = 1;
    }
  }

  function activateInterval(): void {
    intervalRef.current = setInterval(() => {
      writeText();
    }, [speed]);
  }

  useEffect(() => {
    if (contentRef && countRef) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        activateInterval();
      } else {
        activateInterval();
      }
    }
  }, [speed]);

  useEffect(() => {
    setSpeed(300 / limit);
  }, [limit]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value: number = Number(e.target.value);
    if (value < 1 || value > 10) {
      return;
    } else {
      setLimit(value);
    }
  };

  return (
    <>
      <Head>
        <title>Auto Text Effect | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <h3 ref={contentRef}>Loading....</h3>
        </Main>
        <Bottom>
          <h6>SPEED :</h6>
          <input type='number' name='speed' value={limit} onChange={handleChange} min={1} max={10} step={1} />
        </Bottom>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  & h3 {
    margin: 3rem 0;
    font-size: 2.5rem;
    font-weight: 500;
    color: #fff;
  }
`;

const Bottom = styled.div`
  background-color: rgba(0, 0, 0, 0.1);
  padding: 1rem;
  display: flex;
  position: absolute;
  bottom: 2rem;
  align-items: center;

  & h6 {
    font-size: 2rem;
    font-weight: 400;
    color: #fff;
    margin-right: 1rem;
  }

  & input {
    padding: 0.6rem;
    color: #fff;
    outline: none;
    font-size: 2rem;
    background-color: ${colors.primary};
    border: none;
    text-align: center;
  }
`;
