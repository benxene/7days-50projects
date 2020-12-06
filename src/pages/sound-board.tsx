import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

export default function SoundBoard() {
  const [active, setActive] = useState<any>(null);

  const musicRef = useRef<HTMLAudioElement | null>(null);

  const playMusic = () => {
    musicRef.current = new Audio(`/sounds/${sounds[active]}.mp3`);
    musicRef.current.play();
  };

  useEffect(() => {
    if (active !== null) {
      if (musicRef.current) {
        musicRef.current.pause();
        playMusic();
      } else {
        playMusic();
      }
    }
  }, [active]);

  return (
    <>
      <Head>
        <title>Sound Board | 7 days 50 projects</title>
      </Head>
      <Section>
        {sounds.map((val, ind) => {
          return (
            <Card key={ind} onClick={() => setActive(ind)}>
              <h3>{val}</h3>
            </Card>
          );
        })}
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  text-align: center;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const Card = styled.div`
  background-color: #1c386d;
  color: #fff;
  margin: 2rem;
  padding: 2rem 4rem;
  border-radius: 5px;
  cursor: pointer;

  & h3 {
    font-weight: 400;
  }
`;
