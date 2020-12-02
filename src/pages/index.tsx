import Head from 'next/head';
import styled from 'styled-components';

import { Container } from '../components/Utilities';

export default function Home() {
  return (
    <>
      <Head>
        <title>7 Days 50 Projects</title>
      </Head>
      <Container>
        <h1>Welcome!</h1>
      </Container>
    </>
  );
}
