import Head from 'next/head';
import { CenterContainer } from '../components/Utilities';
import Switch from '../components/Switch';
import { ChangeEvent, useReducer } from 'react';
import styled from 'styled-components';

export default function GoodCheapFast() {
  const [choice, dispatch] = useReducer(reducer, initialChoices);
  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { id: name, checked } = event.target;
    dispatch({ type: name, value: checked });
  };

  return (
    <>
      <Head>
        <title>Good Cheap Fast | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='#fff'>
        <h1>How do you want your project to be?</h1>
        <OptionsGrid>
          <p>Good</p>
          <Switch checked={choice.good} id='good' onChange={handleChange} />
          <p>Cheap</p>
          <Switch checked={choice.cheap} id='cheap' onChange={handleChange} />
          <p>Fast</p>
          <Switch checked={choice.fast} id='fast' onChange={handleChange} />
        </OptionsGrid>
      </CenterContainer>
    </>
  );
}

const initialChoices: IChoices = {
  good: false,
  cheap: false,
  fast: false
};

interface IChoices {
  good: boolean;
  cheap: boolean;
  fast: boolean;
}

const reducer = (state: any, { type, value }: { type: string; value: boolean }) => {
  switch (type) {
    case 'good':
      return { ...state, good: value, fast: value && state.cheap ? false : state.fast };

    case 'cheap':
      return { ...state, cheap: value, good: value && state.fast ? false : state.good };

    case 'fast':
      return { ...state, fast: value, cheap: value && state.good ? false : state.cheap };
  }
};

const OptionsGrid = styled.main`
  display: grid;
  grid-template-columns: repeat(2, minmax(max-content, 1fr));
  grid-gap: 2rem;
  margin: 4rem;
`;
