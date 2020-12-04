import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function BlurryLoading() {
  let [load, setLoad] = useState<number>(0);

  useEffect(() => {
    function loading() {
      if (load > 99) {
        clearInterval(int);
      }
      setLoad(() => load++);
    }
    let int = setInterval(loading, 30);
  }, []);

  return (
    <>
      <Head>
        <title>Blurry Loading | 7 days 50 projects</title>
      </Head>
      <Container>
        <TextContainer scale={calcIntensity(load, 0, 100, 30, 0)} load={load}>
          {' '}
        </TextContainer>
        <Text scale={calcIntensity(load, 0, 100, 1, 0)} load={load}>
          {load}%
        </Text>
      </Container>
    </>
  );
}

const calcIntensity = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div<{ scale: number; load: number }>`
  background: url('blurry-load-img.jpg') no-repeat center center/cover;
  filter: blur(${props => props.scale}px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
`;

const Text = styled.div<{ scale: number; load: number }>`
  color: ${colors.contrast.primary};
  font-size: 4rem;
  font-weight: 800;
  opacity: ${props => props.scale};
`;
