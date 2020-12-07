import Head from 'next/head';
import { useRef } from 'react';
import styled from 'styled-components';

const colors = ['#e74c3c', '#8e44ad', '#3498db', '#e67e22', '#2ecc71'];

export default function HoverBoard() {
  return (
    <>
      <Head>
        <title>Hover Board | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          {[...new Array(500)].map((val, ind: number) => {
            return <Box key={ind} ind={ind} />;
          })}
        </Main>
      </Section>
    </>
  );
}

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

interface BoxProps {
  ind: number;
}

function Box({ ind }: BoxProps) {
  const cardRef = useRef<any>();

  function setColor() {
    const color = getRandomColor();
    cardRef.current.style.background = color;
    cardRef.current.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor() {
    cardRef.current.style.background = '#1d1d1d';
    cardRef.current.style.boxShadow = '0 0 2px #000';
  }

  return <Card ref={cardRef} onMouseOver={setColor} onMouseOut={removeColor} />;
}

const Section = styled.section`
  min-height: 100vh;
  background-color: #111;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  max-width: 400px;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  display: flex;
`;

const Card = styled.div`
  background-color: #1d1d1d;
  box-shadow: 0 0 2px #000;
  height: 1.5rem;
  width: 1.5rem;
  margin: 2px;
  transition: 2s ease;

  &:hover {
    transition-duration: 0s;
  }
`;
