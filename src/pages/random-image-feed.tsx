import Head from 'next/head';
import Image from 'next/image';
import styled from 'styled-components';

import { Container, Heading } from '../components/Utilities';

export default function RandomImageFeed() {
  return (
    <>
      <Head>
        <title>Random Image Feed | 7 days 50 projects</title>
      </Head>
      <Container style={{ margin: '8rem auto' }}>
        <Heading style={{ textAlign: 'center' }}>Random Image Feed</Heading>
        <Frame>
          {[...Array(15)].map((val, index) => (
            <StyledImage
              src={`https://source.unsplash.com/random/600x400?sig=${index}`}
              alt='random-image'
              height='300px'
              width='400px'
              loading='lazy'
              key={index}
            />
          ))}
        </Frame>
      </Container>
    </>
  );
}

const Frame = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
  grid-auto-rows: 1fr;
  grid-gap: 2.5rem;
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  object-position: center;
`;
