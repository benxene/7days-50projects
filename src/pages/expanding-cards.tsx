import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

export default function ExpandingCards() {
  const [active, setActive] = useState(1);

  return (
    <>
      <Head>
        <title>Expanding Cards | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <Card
            active={active === 1}
            onClick={() => setActive(1)}
            image={
              'https://images.unsplash.com/photo-1558979158-65a1eaa08691?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            }
          >
            <h3>Exploring the world</h3>
          </Card>
          <Card
            active={active === 2}
            onClick={() => setActive(2)}
            image={
              'https://images.unsplash.com/photo-1572276596237-5db2c3e16c5d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            }
          >
            <h3>Wild Forest</h3>
          </Card>
          <Card
            active={active === 3}
            onClick={() => setActive(3)}
            image={
              'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1353&q=80'
            }
          >
            <h3>Sunny Beach</h3>
          </Card>
          <Card
            active={active === 4}
            onClick={() => setActive(4)}
            image={
              'https://images.unsplash.com/photo-1551009175-8a68da93d5f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80'
            }
          >
            <h3>City on Winter</h3>
          </Card>
          <Card
            active={active === 5}
            onClick={() => setActive(5)}
            image={
              'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
            }
          >
            <h3>Mountains - Clouds</h3>
          </Card>
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: auto;
`;

const Card = styled.div<{ image: string; active: boolean }>`
  height: 80vh;
  margin: auto;
  width: 10rem;
  position: relative;
  margin: 1rem;
  border-radius: 5rem;
  transition: flex 0.7s ease-in;
  flex: ${props => (props.active ? 5 : 0.5)};
  background-image: ${props => `url(${props.image})`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  color: #fff;
  cursor: pointer;

  @media (max-width: 500px) {
    &:nth-of-type(4),
    &:nth-of-type(5) {
      display: none;
    }
  }
  & h3 {
    position: absolute;
    font-size: 2.5rem;
    bottom: 2rem;
    left: 2rem;
    transition: opacity 0.3s ease-in 0.4s;
    opacity: ${props => (props.active ? 1 : 0)};

    @media (max-width: 700px) {
      display: none;
    }
  }
`;
