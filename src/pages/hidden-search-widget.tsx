import { useState } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { FaSearch } from 'react-icons/fa';

import { colors } from '../constants/theme';

export default function HiddenWidget() {
  const [click, setClick] = useState<boolean>(false);
  return (
    <>
      <Head>
        <title>Hidden Search | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        <SearchContainer>
          <Input id='search' type='text' placeholder='Search...' style={click ? { width: '23rem' } : {}} />
          <SearchButton htmlFor='search' onClick={() => setClick(!click)}>
            <FaSearch />
          </SearchButton>
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

const SearchButton = styled.label`
  position: absolute;
  padding: 1rem 1.2rem;
  background-color: ${colors.contrast.primary};
  border-radius: 2px;
  right: 2px;
  cursor: pointer;
  display: inline-flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  svg {
    font-size: 2rem;
  }
`;
