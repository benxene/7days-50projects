import { useEffect, useRef } from 'react';
import styled from 'styled-components';
import Head from 'next/head';

import { Button, Section } from '../components/Utilities';
import { colors } from '../constants/theme';

export default function ImageCarousel() {
  const imgConRef = useRef<any>(null);

  let translate = 0;

  useEffect(() => {
    setInterval(() => {
      translate++;
      if (translate > 3) {
        translate = 0;
        imgConRef.current.style.transform = 'translateX(0px)';
      }
      imgConRef.current.style.transform = `translateX(${-translate * 500}px)`;
    }, 3000);
  }, [imgConRef]);

  return (
    <>
      <Head>
        <title>Image Carousel | 7 days 50 projects</title>
      </Head>
      <MySection>
        <CarouselContainer>
          <ImageContainer ref={imgConRef}>
            <img src='https://source.unsplash.com/user/erondu/500x500' alt='pic1' />
            <img src='https://source.unsplash.com/user/krishnaamo/500x500' alt='pic2' />
            <img src='https://source.unsplash.com/user/iamkkc/500x500' alt='pic3' />
            <img src='https://source.unsplash.com/user/x_7/500x500' alt='pic4' />
          </ImageContainer>
          <ButtonContainer>
            <Button
              color='secondary'
              onClick={() => {
                translate--;
                if (translate < 0) {
                  translate = 3;
                  imgConRef.current.style.transform = `translateX(${-translate * 500}px)`;
                }
                imgConRef.current.style.transform = `translateX(${-translate * 500}px)`;
              }}
            >
              Prev
            </Button>
            <Button
              color='primary'
              onClick={() => {
                translate++;
                if (translate > 3) {
                  translate = 0;
                  imgConRef.current.style.transform = 'translateX(0px)';
                }
                imgConRef.current.style.transform = `translateX(${-translate * 500}px)`;
              }}
            >
              Next
            </Button>
          </ButtonContainer>
        </CarouselContainer>
      </MySection>
    </>
  );
}

const MySection = styled(Section)`
  margin: 0 auto;
  height: 100vh;
  background-color: ${colors.darkSlate};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CarouselContainer = styled.div`
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.3);
  height: 46rem;
  width: 40rem;
  overflow: hidden;
`;

const ImageContainer = styled.div`
  display: flex;
  height: 40rem;
  width: 40rem;
  transition: all 0.8s;

  img {
    object-fit: cover;
    object-position: center;
  }
`;

const ButtonContainer = styled.div`
  margin: 1rem;
  display: flex;
  justify-content: space-evenly;
`;
