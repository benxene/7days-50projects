import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

import { CenterContainer } from '../components/Utilities';
import { colors, sizes } from '../constants/theme';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import testimonials from '../constants/testimonials';

export default function Testimonial() {
  const [index, setIndex] = useState<number>(0);

  const nextIndex = () => {
    setIndex(curIndex => {
      if (curIndex === testimonials.length - 1) {
        return 0;
      }
      return curIndex + 1;
    });
    setTimeout(nextIndex, 4970);
  };

  useEffect(() => {
    setTimeout(nextIndex, 5000);
  }, []);

  return (
    <>
      <Head>
        <title>Testimonial Box | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='primary'>
        <Frame>
          <QuoteLeft />
          <QuoteRight />
          <TestimonialContainer>
            <ProgressBar />
            <p>{testimonials[index].text}</p>
            <Author
              name={testimonials[index].name}
              occupation={testimonials[index].occupation}
              avatar={testimonials[index].avatar}
            />
          </TestimonialContainer>
        </Frame>
      </CenterContainer>
    </>
  );
}

function Author({ name, occupation, avatar }: IAuthor) {
  return (
    <AuthorView>
      <Avatar src={avatar} loading='lazy' unoptimized width='10rem' height='10rem' />
      <div>
        <h3>{name}</h3>
        <p>{occupation}</p>
      </div>
    </AuthorView>
  );
}

interface IAuthor {
  name: string;
  occupation: string;
  avatar: string;
}

const Frame = styled.main`
  width: 70rem;
  background-color: #fff;
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.4);
  border-radius: ${sizes.radius.medium};
  padding: 1.5rem 3rem;
  position: relative;

  @media (max-width: 60rem) {
    width: 95%;
    padding: 2rem;
  }
`;

const TestimonialContainer = styled.div`
  width: 80%;
  margin: 2rem auto;

  @media (max-width: 40rem) {
    width: 100%;
  }
`;

const AuthorView = styled.div`
  width: fit-content;
  margin: 1.5rem auto;
  display: grid;
  grid-template-columns: 10rem 1fr;
  place-items: center;
  grid-gap: 1rem;

  & > div:first-of-type {
    display: block;
    height: 10rem;
    width: 10rem;
  }
`;

const Avatar = styled(Image)`
  border-radius: 50%;
  object-fit: cover;
  object-position: center;
`;

const progressAnimation = keyframes`
  from {
    width: 0;
  } to {
    width: 100%;
  }
`;

const ProgressBar = styled.div`
  height: 0.5rem;
  margin-bottom: 2rem;
  background-color: ${colors.primary};
  border-radius: 1rem;
  transition: all 0.1s;
  animation: ${progressAnimation} 5000ms linear infinite;
`;

const QuoteLeft = styled(FaQuoteLeft)`
  position: absolute;
  top: 6rem;
  left: 4rem;
  color: ${colors.primary};
  font-size: 3rem;
  opacity: 0.7;
  @media (max-width: 40rem) {
    visibility: hidden;
  }
`;

const QuoteRight = styled(FaQuoteRight)`
  position: absolute;
  top: 6rem;
  right: 4rem;
  color: ${colors.primary};
  font-size: 3rem;
  opacity: 0.7;
  @media (max-width: 40rem) {
    visibility: hidden;
  }
`;
