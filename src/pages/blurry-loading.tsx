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
        <TextContainer scale={scale} load={load}>
          {' '}
        </TextContainer>
        <Text scale={scale} load={load}>
          {load}%
        </Text>
      </Container>
    </>
  );
}

const scale = (num: number, in_min: number, in_max: number, out_min: number, out_max: number) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TextContainer = styled.div<{ scale: any; load: number }>`
  background: url('blurry-load-img.jpg') no-repeat center center/cover;
  filter: blur(${props => props.scale(props.load, 0, 100, 30, 0)}px);
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  width: 100vw;
  z-index: -1;
`;

const Text = styled.div<{ scale: any; load: number }>`
  color: ${colors.contrast.primary};
  font-size: 4rem;
  font-weight: 800;
  opacity: ${props => props.scale(props.load, 0, 100, 1, 0)};
  /* z-index: 1000; */
`;
