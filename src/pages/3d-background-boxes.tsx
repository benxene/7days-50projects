import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';

import { CenterContainer } from '../components/Utilities';
import { colors, sizes } from '../constants/theme';

export default function $3DBGBox() {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  const doMagic = () => {
    setIsExpanded(old => !old);
  };

  return (
    <>
      <Head>
        <title>3D Background Boxes | 7 days 50 projects</title>
      </Head>
      <CenterContainer>
        <StyledRippleBtn onClick={doMagic}>Magic</StyledRippleBtn>
        <Boxes expanded={isExpanded}>
          {[...new Array(4).fill([...new Array(4)])].map((innerArray, outer) => {
            return innerArray.map((_: any, inner: number) => {
              return (
                <Box
                  key={`${inner}-${outer}`}
                  style={{ backgroundPosition: `${-inner * 125}px ${-outer * 125}px` }}
                />
              );
            });
          })}
        </Boxes>
      </CenterContainer>
    </>
  );
}

const StyledRippleBtn = styled.button`
  position: fixed;
  top: 2rem;
  left: 50%;
  transform: translateX(-50%);
  background-color: ${colors.secondary};
  border: 2px solid ${colors.secondary};
  padding: 1rem 1.5rem;
  text-transform: uppercase;
  color: #fff;
  z-index: 10;
  font: inherit;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 2px 0.6rem rgba(0, 0, 0.3);
  cursor: pointer;

  &:hover {
    box-shadow: 0 2px 0.6rem rgba(0, 0, 0.3);
  }

  &:focus {
    outline: none;
  }
`;

const Boxes = styled.main<{ expanded: boolean }>`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 500px;
  width: 500px;
  position: relative;
  transition: 0.4s ease;

  ${({ expanded }) =>
    expanded
      ? `width: 600px;
        height: 600px;

        &>div {
          transform: rotateZ(360deg);
        }`
      : ''} {
  }
`;

const Box = styled.div`
  background-image: url('https://media.giphy.com/media/EZqwsBSPlvSda/giphy.gif');
  background-repeat: no-repeat;
  background-size: 500px 500px;
  position: relative;
  height: 125px;
  width: 125px;
  transition: 0.4s ease;

  &::after {
    content: '';
    background-color: ${colors.primary};
    position: absolute;
    top: 8px;
    right: -15px;
    height: 100%;
    width: 15px;
    transform: skewY(45deg);
  }

  &::before {
    content: '';
    background-color: ${colors.primary};
    position: absolute;
    bottom: -15px;
    left: 8px;
    height: 15px;
    width: 100%;
    transform: skewX(45deg);
  }
`;
