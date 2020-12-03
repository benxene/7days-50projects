import Head from 'next/head';
import styled from 'styled-components'

export default function RotatingNav() {
  return (
    <>
      <Head>
        <title>Rotating Navigation Animation | 7 days 50 projects</title>
      </Head>
      <Container>
          Hello!
      </Container>
    </>
  );
}

const Container = styled.div`
    background-color: #123abc;
`;