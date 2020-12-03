import Head from 'next/head';
import styled from 'styled-components';

import { Container } from '../components/Utilities';

export default function RotatingNav() {
  return (
    <>
      <Head>
        <title>Rotating Navigation Animation | 7 days 50 projects</title>
      </Head>

      <NewContainer>
        <CircleContainer>Hello!</CircleContainer>
        <Content>
          <Heading>Amazing Article!!!</Heading>
          <Paragraph margin={'2rem'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi quia
            minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
            repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
            Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam
            esse repellendus.
          </Paragraph>
          <Paragraph margin={'2rem'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi quia
            minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
            repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
            Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam
            esse repellendus.
          </Paragraph>
          <Image image={'batman.jpg'} margin={'2rem'} width={'90rem'} height={'50rem'}></Image>
          <Paragraph margin={'2rem'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi quia
            minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
            repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
            Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam
            esse repellendus.
          </Paragraph>
          <Paragraph margin={'2rem'}>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae? Eligendi quia
            minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam esse
            repellendus.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Pariatur doloribus nulla recusandae?
            Eligendi quia minus assumenda sequi eum maiores officia possimus magnam in, iste aliquid nesciunt quam ipsam
            esse repellendus.
          </Paragraph>
        </Content>
      </NewContainer>
    </>
  );
}

const Heading = styled.h2<{ center?: boolean }>`
  font-size: 3rem;
  text-align: ${props => (props.center ? 'center' : 'match-parent')};
`;

const NewContainer = styled(Container)`
  margin: 5rem auto;
`;

const CircleContainer = styled.div<{}>`
  width: 22rem;
  height: 22rem;
  border-radius: 50%;
  position: absolute;
  top: -11rem;
  left: -11rem;
  background-color: #2d6cdf;
`;

const Content = styled.div<{}>`
  max-width: 90rem;
  margin: 10rem auto;

  @media (max-width: 90rem) {
    max-width: 50rem;
  }
`;

const Paragraph = styled.p<{ center?: boolean; margin?: string }>`
  margin: ${props => props.margin} auto;
  font-size: 1.4rem;
  font-weight: 400;
  text-align: ${props => (props.center ? 'center' : ' left')};
`;

const Image = styled.div<{ image?: string; margin?: string; width?: string; height?: string }>`
  margin: ${props => props.margin} auto;
  width: ${props => props.width};
  height: ${props => props.height};
  background-image: url(${props => props.image});
  background-position: center;
  background-size: cover;

  @media (max-width: 90rem) {
    width: 45rem;
    height: 25rem;
  }
  @media (max-width: 60rem) {
    width: 28rem;
    height: 18rem;
  }
`;
