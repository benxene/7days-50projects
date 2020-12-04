import Head from 'next/head';
import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { CenterContainer } from '../components/Utilities';
import { sizes } from '../constants/theme';

export default function KeyCodes() {
  const [keypress, setKeypress] = useState<{ keyCode: number; key: string; code: string }>();
  useEffect(() => {
    window.addEventListener('keydown', (event: KeyboardEvent) => {
      let { keyCode, key, code } = event;
      if (keyCode === 32) {
        key = 'Space';
      }
      setKeypress({ keyCode, key, code });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Key press details | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='primary'>
        <Frame>
          {keypress ? (
            <Details>
              <Card>
                <h6>Key</h6>
                <p>{keypress.key}</p>
              </Card>

              <Card>
                <h6>Key Code</h6>
                <p>{keypress.keyCode}</p>
              </Card>

              <Card>
                <h6>Key Name</h6>
                <p>{keypress.code}</p>
              </Card>
            </Details>
          ) : (
            <Card>Press a key to get the details</Card>
          )}
        </Frame>
      </CenterContainer>
    </>
  );
}

const Details = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 2rem;
  place-content: center;

  @media (max-width: 40rem) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, max-content);
  }
`;

const Card = styled.div`
  display: grid;
  background-color: #fff;
  box-shadow: 0 0.4rem 0.7rem rgba(0, 0, 0, 0.3);
  border-radius: ${sizes.radius.small};
  padding: 1.5rem 3rem;
  min-width: 18rem;
  text-align: center;
`;

const Frame = styled.main`
  display: flex;
  flex-direction: row;
  font-size: 1.8rem;
  & > div:not(:last-child) {
    margin-right: 2rem;
  }

  @media (max-width: 40rem) {
    flex-direction: column;
    & > div {
      margin-right: initial;
      margin-bottom: 2rem;
    }
  }
`;
