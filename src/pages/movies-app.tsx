import styled from 'styled-components';
import Head from 'next/head';
import MovieCard from '../components/MovieCard';
import { colors } from '../constants/theme';

export default function MoviesApp() {
  return (
    <>
      <Head>
        <title>Movies App | 7 days 50 projects</title>
      </Head>
      <Page>
        <Container>
          <MovieCard
            title='Upside Down Magic'
            rating={7.7}
            description='Nory and her best friend Reina enter the Sage Academy for Magical Studies, where Nory’s unconventional powers land her in a class for those with wonky, or “upside-down,” magic. Undaunted, Nory sets out to prove that that upside-down magic can be just as powerful as right-side-up.'
            poster={'https://image.tmdb.org/t/p/w1280/xfYMQNApIIh8KhpNVtG1XRz0ZAp.jpg'}
          />
        </Container>
      </Page>
    </>
  );
}

const Container = styled.main`
  display: grid;
  padding: 3rem;
`;

const Page = styled.div`
  background-color: ${colors.darkSlate};
  color: #fff;
  min-height: 100vh;
`;
