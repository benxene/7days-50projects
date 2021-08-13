import { useEffect, useState } from 'react';
import Head from 'next/head';
import styled, { keyframes } from 'styled-components';

import { CenterContainer } from '../components/Utilities';
import { shadows, sizes } from '../constants/theme';

export default function SkeletonLoader() {
  const [loaded, setLoaded] = useState<boolean>(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 3000);
  }, []);

  return (
    <>
      <Head>
        <title>Skeleton Loader | 7 days 50 projects</title>
      </Head>
      <CenterContainer>
        <Card>
          <CardImage>
            {loaded ? (
              <img
                src='/batman.jpg'
                alt='batman'
                style={{
                  height: 'auto',
                  width: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center'
                }}
              />
            ) : (
              <Loader />
            )}
          </CardImage>
          <CardContent>
            <h4>{loaded ? 'Lorem ipsum sit amit' : <SmallLoader />}</h4>
            <p>
              {loaded ? (
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendi'
              ) : (
                <SmallLoader />
              )}
            </p>

            {loaded ? <img src='/batman.jpg' alt='batman' /> : <Loader />}

            <article>
              <h5>{loaded ? 'Batman' : <SmallLoader />}</h5>
              <time>{loaded ? 'Oct 09, 2020' : <SmallLoader />}</time>
            </article>
          </CardContent>
        </Card>
      </CenterContainer>
    </>
  );
}

const Card = styled.figure`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  min-width: 30rem;
  max-width: 32rem;
  border-radius: ${sizes.radius.small};
  box-shadow: ${shadows.medium};
  overflow: hidden;
`;

const CardImage = styled.div`
  & > div {
    height: 100%;
    width: 100%;
  }
`;

const CardContent = styled.figcaption`
  padding: 3rem;
  display: grid;
  grid-template-columns: 4rem 1fr;
  grid-template-rows: max-content max-content 4rem;
  grid-gap: 1rem;

  h4 {
    grid-column: 1 / -1;
  }

  article {
    display: grid;
    grid-gap: 0.5rem;
  }

  p {
    color: #777;
    margin-bottom: 1rem;
    font-size: 1.4rem;
    grid-column: 1 / -1;
  }

  & > img,
  & > div {
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }

  time {
    color: #999;
    font-size: 1.2rem;
    height: 1.5rem;
  }
`;

const loaderAnimation = keyframes`
  from {
    background-position: 50% 0;
  }

  to {
    background-position: -150% 0;
  }
`;

const Loader = styled.div`
  content: '';
  height: 100%;
  width: 100%;
  background-image: linear-gradient(to right, #f6f7f8 0%, #edeef1 10%, #f6f7f8 20%, #f6f7f8 100%);
  background-size: 200% 100%;
  animation: ${loaderAnimation} 1s linear infinite;
`;

const SmallLoader = styled(Loader)`
  border-radius: 2rem;
  height: 1.5rem;
`;
