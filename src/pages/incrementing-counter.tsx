import styled from 'styled-components';
import { CenterContainer } from '../components/Utilities';
import { RiTwitterFill, RiYoutubeFill, RiFacebookCircleFill } from 'react-icons/ri';
import { colors } from '../constants/theme';
import { useEffect, useState } from 'react';
import Head from 'next/head';

export default function IncrementingCounter() {
  return (
    <>
      <Head>
        <title>Incrementing counter | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='primary'>
        <Frame>
          <Stat>
            <RiTwitterFill />
            <IncreasingValue>{5000}</IncreasingValue>
            <caption>Twitter followers</caption>
          </Stat>
          <Stat>
            <RiYoutubeFill />
            <IncreasingValue>{10000}</IncreasingValue>
            <caption>YouTube Subscribers</caption>
          </Stat>
          <Stat>
            <RiFacebookCircleFill />
            <IncreasingValue>{1000}</IncreasingValue>
            <caption>Facebook fans</caption>
          </Stat>
        </Frame>
      </CenterContainer>
    </>
  );
}

function IncreasingValue({ children: targetValue }: { children: number }) {
  const [currentValue, setCurrentValue] = useState<number>(0);
  const step = Math.ceil(targetValue / 200);

  useEffect(() => {
    if (currentValue < targetValue) {
      setTimeout(() => setCurrentValue(prev => prev + step), 10);
    } else {
      setCurrentValue(targetValue);
    }
  }, [currentValue]);

  return <h2>{currentValue}</h2>;
}

const Frame = styled.main`
  display: grid;
  grid-template-columns: repeat(3, minmax(max-content, 1fr));
  grid-gap: 4rem;
  place-content: center;
  place-items: center;
  color: ${colors.contrast.primary};
  align-items: center;
  justify-content: center;
  text-align: center;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 1fr);
    transform: scale(0.9);
  }
`;

const Stat = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 5rem max-content;
  grid-gap: 1rem;
  place-content: center;
  place-items: center;

  svg {
    font-size: 6rem;
  }

  h2 {
    font-size: 5rem;
  }
`;
