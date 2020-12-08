import { useEffect, useRef } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { Section } from '../components/Utilities';
import { colors } from '../constants/theme';
import { FaArrowUp, FaArrowDown } from 'react-icons/fa';

let translate = 0;

export default function VerticalSlider() {
  const leftRef = useRef<any>(null);
  const rightRef = useRef<any>(null);
  const sectionRef = useRef<any>(null);

  const handleUpChange = () => {
    translate++;
    if (translate > 3) {
      translate = 0;
      leftRef.current.style.transform = `translateY(0px)`;
      rightRef.current.style.transform = `translateY(0px)`;
    }
    leftRef.current.style.transform = `translateY(${translate * sectionRef.current.offsetHeight}px)`;
    rightRef.current.style.transform = `translateY(${-translate * sectionRef.current.offsetHeight}px)`;
  };

  const handleDownChange = () => {
    translate--;
    if (translate < 0) {
      translate = 3;
      leftRef.current.style.transform = `translateY(${-translate * sectionRef.current.offsetHeight}px)`;
      rightRef.current.style.transform = `translateY(${translate * sectionRef.current.offsetHeight}px)`;
    }
    leftRef.current.style.transform = `translateY(${translate * sectionRef.current.offsetHeight}px)`;
    rightRef.current.style.transform = `translateY(${-translate * sectionRef.current.offsetHeight}px)`;
  };

  //   useEffect(() => {}, [leftRef, rightRef]);

  return (
    <>
      <Head>
        <title>Vertical Slider | 7 days 50 projects</title>
      </Head>
      <MySection ref={sectionRef}>
        <LeftSlide ref={leftRef}>
          <Slide1>
            <h1>Nature Flower</h1>
            <p>all in pink</p>
          </Slide1>
          <Slide2>
            <h1>Bluuue Sky</h1>
            <p>with it's mountains</p>
          </Slide2>
          <Slide3>
            <h1>Lonely Castle</h1>
            <p>in the wilderness</p>
          </Slide3>
          <Slide4>
            <h1>Flying eagle</h1>
            <p>in the sunset</p>
          </Slide4>
        </LeftSlide>
        <RightSlide ref={rightRef}>
          <Image1 />
          <Image2 />
          <Image3 />
          <Image4 />
        </RightSlide>
        <ButtonContainer>
          <UpButton onClick={handleUpChange}>
            <FaArrowUp />
          </UpButton>
          <DownButton onClick={handleDownChange}>
            <FaArrowDown />
          </DownButton>
        </ButtonContainer>
      </MySection>
    </>
  );
}

const MySection = styled(Section)`
  margin: 0;
  padding: 0;
  height: 100vh;
`;

const LeftSlide = styled.div`
  position: absolute;
  height: 100%;
  width: 35%;
  background-color: ${colors.yellow};
  top: -300vh;
  left: 0;
  transition: transform 0.5s ease-in-out;

  & * h1 {
    font-size: 4rem;
    margin: 1rem;
  }

  & > div {
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: #fff;
  }
`;

const RightSlide = styled.div`
  height: 100%;
  position: absolute;
  top: 0;
  left: 35%;
  width: 65%;
  transition: transform 0.5s ease-in-out;
`;

const Slide1 = styled.div`
  background-color: ${colors.rose};
`;
const Slide2 = styled.div`
  background-color: ${colors.darkSlate};
`;
const Slide3 = styled.div`
  background-color: ${colors.primary};
`;
const Slide4 = styled.div`
  background-color: ${colors.yellow};
`;

const Image1 = styled.div`
  background-image: url('https://images.unsplash.com/photo-1508768787810-6adc1f613514?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e27f6661df21ed17ab5355b28af8df4e&auto=format&fit=crop&w=1350&q=80');
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Image2 = styled.div`
  background-image: url('https://images.unsplash.com/photo-1519981593452-666cf05569a9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=90ed8055f06493290dad8da9584a13f7&auto=format&fit=crop&w=715&q=80');
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Image3 = styled.div`
  background-image: url('https://images.unsplash.com/photo-1486899430790-61dbf6f6d98b?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=8ecdee5d1b3ed78ff16053b0227874a2&auto=format&fit=crop&w=1002&q=80');
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const Image4 = styled.div`
  background-image: url('https://images.unsplash.com/photo-1510942201312-84e7962f6dbb?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=da4ca7a78004349f1b63f257e50e4360&auto=format&fit=crop&w=1050&q=80');
  background-position: center center;
  background-size: cover;
  width: 100%;
  height: 100%;
`;

const ButtonContainer = styled.div`
  position: absolute;
  top: 31rem;
  left: 35%;
  button {
    position: absolute;
    z-index: 100;
  }
`;

const UpButton = styled.button`
  background-color: #fff;
  border: none;
  color: ${colors.darkSlate};
  cursor: pointer;
  padding: 1rem;
  transform: translateY(-100%);
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  transition: all 0.2s;

  :focus {
    outline: none;
  }
  :hover {
    background-color: #ccc;
  }
`;

const DownButton = styled.button`
  background-color: #fff;
  border: none;
  color: ${colors.darkSlate};
  cursor: pointer;
  padding: 1rem;
  transform: translateX(-100%);
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
  transition: all 0.2s;

  :focus {
    outline: none;
  }
  :hover {
    background-color: #ccc;
  }
`;
