import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { colors } from '../constants/theme';

const initialValue = '// Joke goes here';

export default function DadJokes() {
  const [joke, setJoke] = useState(initialValue);

  const getJoke = async () => {
    const tellDadJokesUrl = 'https://icanhazdadjoke.com/';
    let res;
    try {
      res = await axios.get(tellDadJokesUrl, { headers: { Accept: 'text/plain' } });
      setJoke(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getJoke();
  }, []);

  return (
    <>
      <Head>
        <title>Dad jokes | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <h5>Don't Laugh Challenge</h5>
          <h3>{joke}</h3>
          {joke !== initialValue && <button onClick={() => getJoke()}>Get Another Joke</button>}
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-image: linear-gradient(125deg, rgba(45, 108, 223, 1) 0%, rgba(126, 125, 125, 1) 100%);
  color: ${colors.contrast.darkSlate};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  background-color: ${colors.contrast.primary};
  background-color: #fff;
  border-radius: 1rem;
  box-shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
  padding: 5rem 2rem;
  text-align: center;
  max-width: 100%;
  width: 800px;

  & h3 {
    margin: 3rem 0;
    font-size: 2.5rem;
    font-weight: 400;
    color: #000;
  }

  & h5 {
    font-size: 1.5rem;
    color: rgba(112, 112, 112, 0.6);
  }

  & button {
    background-color: ${colors.secondary};
    color: #fff;
    border: 0;
    border-radius: 1rem;
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1), 0 6px 6px rgba(0, 0, 0, 0.1);
    padding: 1.4rem 4rem;
    font-size: 1.6rem;
    cursor: pointer;
    outline: none;
  }
`;
