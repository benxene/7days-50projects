import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { colors } from '../constants/theme';

export default function BlurryLoading() {
  let [load, setLoad] = useState<number>(0);

  const incrementLoadCount = () => {
    setLoad(oldValue => {
      if (load > 99) {
        return oldValue;
      } else {
        return oldValue + 1;
      }
    });
  };

  useEffect(() => {
    setTimeout(incrementLoadCount, 30);
  }, [load]);

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
  const intensity = ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  return intensity;
};

const Container = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
`;

const TextContainer = styled.div<{ scale: number; load: number }>`
  background: url('blurry-load-img.jpg') no-repeat center center/cover;
  filter: blur(${props => props.scale}px);
  position: absolute;
  top: -3rem;
  left: -3rem;
  right: -3rem;
  bottom: -3rem;
`;

const Text = styled.div<{ scale: number; load: number }>`
  color: ${colors.contrast.primary};
  font-size: 4rem;
  font-weight: 800;
  opacity: ${props => props.scale};
`;
