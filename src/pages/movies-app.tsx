import { useRef, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { RiSearch2Line } from 'react-icons/ri';

import { MovieCard } from '../components';
import { colors } from '../constants/theme';
import { IconButton } from './netflix-nav';
import axios from 'axios';
import { GetServerSideProps } from 'next';

export default function MoviesApp({ movies }: { movies: Array<MovieProps> }) {
  const [movieList, setMovieList] = useState(movies);
  const inputElement = useRef<HTMLInputElement>(null);

  const searchMovies = async (event: React.FormEvent) => {
    event.preventDefault();
    const param = inputElement.current?.value;
    if (!param) return setMovieList(movies);
    const reqUrl = `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query="${param}"`;

    const response = await axios.get(reqUrl);
    setMovieList(response.data.results);
  };

  return (
    <>
      <Head>
        <title>Movies App | 7 days 50 projects</title>
      </Head>
      <Page>
        <AppBar onSubmit={searchMovies}>
          <input type='text' ref={inputElement} placeholder='Search' />
          <SearchButton type='submit'>
            <RiSearch2Line />
          </SearchButton>
        </AppBar>
        <Container>
          {movieList.map(movie => {
            return (
              <MovieCard
                id={movie.id}
                key={movie.id}
                title={movie.title}
                rating={movie.vote_average}
                description={movie.overview}
                poster={'https://image.tmdb.org/t/p/w1280' + movie.poster_path}
              />
            );
          })}
        </Container>
      </Page>
    </>
  );
}

interface MovieProps {
  id: string;
  title: string;
  vote_average: number;
  overview: string;
  poster_path: string;
}

export const getServerSideProps: GetServerSideProps = async () => {
  const response = await axios.get(
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=1'
  );

  return {
    props: { movies: response.data.results }
  };
};

const Container = styled.main`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(28rem, 1fr));
  place-items: center;
  grid-gap: 2rem;
  padding: 3rem;
`;

const Page = styled.div`
  background-color: ${colors.darkSlate};
  color: #fff;
  min-height: 100vh;
`;

const AppBar = styled.form`
  width: 100%;
  height: 7rem;
  padding: 1.5rem 4rem;
  display: flex;
  width: 100%;
  flex-direction: row-reverse;
  background-color: #131313;
  box-shadow: 0 3px 1.2rem rgba(0, 0, 0, 0.8);

  input {
    background-color: rgba(0, 0, 0, 0.4);
    border-radius: 2rem;
    border: 2px solid #444444;
    width: 25rem;
    font: inherit;
    padding: 0.5rem 4rem 0.5rem 1.2rem;
    transition: all 0.2s;
    color: inherit;
    margin-right: -2rem;

    &::placeholder {
      font: inherit;
    }

    &:focus {
      outline: none;
      border: 2px solid ${colors.primary};

      &::placeholder {
        color: ${colors.primary};
      }

      & + button {
        background-color: ${colors.primary};
      }
    }
  }
`;

const SearchButton = styled(IconButton)`
  color: currentColor;
  order: -1;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
  margin-left: -1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 10;
  align-self: center;
  transition: all 0.2s;

  &:hover {
    background-color: ${colors.primary};
  }
`;
