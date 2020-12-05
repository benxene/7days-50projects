import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

export default function ProgressStep() {
  const [step, setStep] = useState(1);

  const handleClick = (count: number) => {
    setStep(old => old + count);
  };

  return (
    <>
      <Head>
        <title>Dad jokes | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <Bar style={{ width: `${(step - 1) * 33.33}%` }}></Bar>
          <Step style={step >= 1 ? { borderColor: '#fc5c9c' } : { borderColor: '#e0e0e0' }}>1</Step>
          <Step style={step >= 2 ? { borderColor: '#fc5c9c' } : { borderColor: '#e0e0e0' }}>2</Step>
          <Step style={step >= 3 ? { borderColor: '#fc5c9c' } : { borderColor: '#e0e0e0' }}>3</Step>
          <Step style={step >= 4 ? { borderColor: '#fc5c9c' } : { borderColor: '#e0e0e0' }}>4</Step>
        </Main>
        <ButtonContainer>
          <button
            onClick={() => handleClick(-1)}
            disabled={step === 1}
            style={step === 1 ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#fc5c9c' }}
          >
            Prev
          </button>
          <button
            onClick={() => handleClick(1)}
            disabled={step === 4}
            style={step === 4 ? { backgroundColor: '#e0e0e0' } : { backgroundColor: '#fc5c9c' }}
          >
            Next
          </button>
        </ButtonContainer>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: #f6f7fb;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-bottom: 3rem;
  max-width: 100%;
  width: 35rem;

  &::before {
    content: '';
    background-color: #e0e0e0;
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    height: 4px;
    width: 100%;
    z-index: 1;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  & > button {
    margin: 2rem;
    outline: none;
    background-color: #fff;
    border: 0;
    color: #fff;
    border-radius: 0.8rem;
    cursor: pointer;
    font-family: inherit;
    padding: 1rem 3rem;
    font-size: 1.5rem;
  }
`;

const Step = styled.div`
  background-color: #fff;
  color: #999;
  border-radius: 50%;
  height: 3rem;
  width: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 3px solid #e0e0e0;
  z-index: 3;
  transition: 0.4s ease;
`;

const Bar = styled.div`
  background-color: ${colors.secondary};
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  height: 4px;
  z-index: 2;
  transition: 0.4s ease;
`;
