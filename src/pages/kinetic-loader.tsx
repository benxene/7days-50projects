import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import { CenterContainer } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function KineticLoader() {
  return (
    <>
      <Head>
        <title>Kinetic Loader | 7 days 50 projects</title>
      </Head>
      <CenterContainer color={colors.darkSlate}>
        <Triangle />
      </CenterContainer>
    </>
  );
}

const rotateA = keyframes`
  0%,
  25% {
    transform: rotate(0deg);
  }

  50%,
  75% {
    transform: rotate(180deg);
  }

  100% {
    transform: rotate(360deg);
  }
`;

const rotateB = keyframes`
  0%,
  25% {
    transform: rotate(90deg);
  }

  50%,
  75% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(450deg);
  }
`;

const Triangle = styled.div`
  position: relative;
  height: 10rem;
  width: 10rem;

  ::before,
  ::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 0;
    border: 50px solid transparent;
    border-bottom-color: ${colors.contrast.primary};
    animation: ${rotateA} 2s linear infinite 0.5s;
  }

  ::before {
    transform: rotate(90deg);
    animation: ${rotateB} 2s linear infinite;
  }
`;
