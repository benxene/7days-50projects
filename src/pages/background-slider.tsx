import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { Section } from '../components/Utilities';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';

const images: string[] = [
  'https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1511593358241-7eea1f3c84e5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
  'https://images.unsplash.com/photo-1495467033336-2effd8753d51?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
  'https://images.unsplash.com/photo-1522735338363-cc7313be0ae0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2689&q=80',
  'https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80'
];

let count = 0;

export default function BackgroundSlider() {
  const [ind, setInd] = useState<number[]>(new Array(5).fill(0));
  ind[0] = 1;
  const imgRef = useRef<any>();
  const slideRef = useRef<any>();

  const handleClick = () => {
    count++;
    if (count > 4) {
      setInd(old => {
        old[old.length - 1] = 0;
        return [...old];
      });
      count = 0;
    }
    setInd(old => {
      old[count] = 1;
      old[count - 1] = 0;
      return [...old];
    });
  };

  useEffect(() => {
    // imgRef.current.style.backgroundImage = slideRef.current.style.backgroundImage;
  }, [ind]);

  return (
    <>
      <Head>
        <title>Background Slider | 7 days 50 projects</title>
      </Head>
      <MySection
        ref={imgRef}
        // style={{
        //   backgroundImage: `url('https://images.unsplash.com/photo-1559087867-ce4c91325525?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80')`
        // }}
      >
        <Background>
          {images.map((image, index) => {
            return (
              <Slide
                ref={slideRef}
                key={'slide' + index}
                style={{ backgroundImage: `url(${image})`, opacity: `${ind[index]}` }}
              />
            );
          })}
          <LeftButton>
            <FaArrowLeft />
          </LeftButton>
          <RightButton onClick={handleClick}>
            <FaArrowRight />
          </RightButton>
        </Background>
      </MySection>
    </>
  );
}

const MySection = styled(Section)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  overflow: hidden;
  margin: 0;
  padding: 0;
  background-position: center center;
  background-size: cover;
  transition: 0.4s;

  :before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
  }
`;

const Background = styled.div`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  height: 70vh;
  width: 70vw;
  position: relative;
  overflow: hidden;
`;

const Slide = styled.div`
  /* opacity: 1; */
  height: 100vh;
  width: 100vw;
  background-position: center center;
  background-size: cover;
  position: absolute;
  top: -15vh;
  left: -15vw;
  transition: 0.4s ease;
  z-index: 1;
`;

const LeftButton = styled.button`
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 1.4rem;
  font-size: 3rem;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  left: calc(15vw - 65px);

  :focus {
    outline: none;
  }
`;

const RightButton = styled.button`
  position: fixed;
  background-color: transparent;
  color: #fff;
  padding: 1.4rem;
  font-size: 3rem;
  border: 2px solid orange;
  top: 50%;
  transform: translateY(-50%);
  cursor: pointer;
  right: calc(15vw - 65px);

  :focus {
    outline: none;
  }
`;
