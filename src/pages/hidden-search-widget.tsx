import Head from 'next/head';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { colors } from '../constants/theme';
import { useState } from 'react';

export default function HiddenWidget() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Hidden Search | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        <SearchContainer>
          <Input id='search' type='text' placeholder='Search...' style={click ? { width: '23rem' } : undefined} />
          <Label htmlFor='search' onClick={() => (click ? setClick(false) : setClick(true))}>
            <FaSearch />
          </Label>
        </SearchContainer>
      </MyContainer>
    </>
  );
}

const MyContainer = styled.div`
  background-image: linear-gradient(to right bottom, ${colors.primary}, ${colors.primary}, ${colors.secondary});
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SearchContainer = styled.div`
  position: relative;
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  padding: 1rem;
  height: 4.5rem;
  width: 1rem;
  border-radius: 2px;
  outline: none;
  border-color: transparent;
  transition: 0.3s ease;
`;

const Label = styled.label`
  position: absolute;
  padding: 1rem;
  background-color: ${colors.contrast.primary};
  right: 2px;
  cursor: pointer;
  svg {
    font-size: 2rem;
  }
`;
