import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

const contents = [
  'Content1',
  'Content2',
  'Content3',
  'Content4',
  'Content5',
  'Content6',
  'Content7',
  'Content8',
  'Content9',
  'Content10',
  'Content11',
  'Content12'
];

const BoxComponent = () => {
  const [scroll, setScroll] = useState<boolean[]>([]);
  const [boxes, setBoxes] = useState<NodeListOf<HTMLDivElement>>();
  const handleScroll = () => {
    const triggerBottom = (window.innerHeight / 5) * 4;
    const scrollValue = [...boxes].map((box, index) => {
      const boxHeight = box.getBoundingClientRect().top;
      return boxHeight < triggerBottom;
    });
    setScroll([...scrollValue]);
  };

  useEffect(() => {
    if (boxes === undefined) {
      return;
    } else {
      window.addEventListener('scroll', handleScroll);
      window.scrollTo(0, 10);
    }
  }, [boxes]);

  useEffect(() => {
    console.log(scroll);
  }, [scroll]);

  useEffect(() => {
    setBoxes(document.querySelectorAll('.box'));
  }, []);
  return (
    <>
      {contents.map((content, index) => {
        return (
          <Box className='box' key={index} style={scroll[index] ? { transform: 'translateX(0)' } : {}}>
            <h1>{content}</h1>
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
