import Head from 'next/head';
import { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

const BoxComponent = () => {
  const [scroll, setScroll] = useState<boolean[]>([]);
  const boxes = useRef<any>([]);

  useEffect(() => {
    if (boxes === undefined) {
      return;
    } else {
      window.addEventListener('scroll', () => {
        const triggerBottom = (window.innerHeight / 5) * 4;
        const scrollValue = boxes.current.map((box: any) => {
          const boxHeight = box.getBoundingClientRect().top;
          return boxHeight < triggerBottom;
        });
        setScroll([...scrollValue]);
      });
      window.scrollTo(0, 12);
    }
  }, []);

  return (
    <>
      {[...new Array(12)].map((_, index) => {
        return (
          <Box
            className='box'
            ref={el => (boxes.current[index] = el)}
            key={index}
            style={scroll[index] ? { transform: 'translateX(0)' } : {}}
          >
            <h1>{`Content ${index + 1}`}</h1>
          </Box>
        );
      })}
    </>
  );
};

export default function ScrollAnimation() {
  return (
    <>
      <Head>
        <title>Scroll Animation | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        <Heading>Scroll to see the animation!!</Heading>
        <BoxComponent />
      </MyContainer>
    </>
  );
}

const MyContainer = styled.div`
  background-color: ${colors.darkSlate};
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Heading = styled.h1`
  color: ${colors.contrast.primary};
  margin: 1rem;
`;

const Box = styled.div`
  width: 30rem;
  height: 20rem;
  background-color: ${colors.primary};
  border-radius: 10px;
  box-shadow: 2px 4px 6px rgba(255, 255, 255, 0.3);
  color: ${colors.contrast.primary};
  margin: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.3s transform;
  &:nth-child(odd) {
    transform: translateX(-400%);
  }
  &:nth-child(even) {
    transform: translateX(400%);
  }
`;
