import { useRef, KeyboardEvent, ChangeEvent } from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { CenterContainer } from '../components/Utilities';
import { colors, sizes } from '../constants/theme';

export default function OTP() {
  const references = useRef<any>([]);

  const keyDownHandler = (e: KeyboardEvent, idx: number) => {
    if ((Number(e.key) >= 0 && Number(e.key) <= 9) || e.key === 'ArrowRight') {
      if (idx === 5) return;
      setTimeout(() => references.current[idx + 1].focus(), 10);
    } else if (e.key === 'Backspace' || e.key === 'ArrowLeft') {
      if (idx === 0) return;
      setTimeout(() => references.current[idx - 1].focus(), 10);
    }
  };

  const changeHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    if (value.length > 1) {
      event.target.value = value.charAt(value.length - 1);
    }
  };

  return (
    <>
      <Head>
        <title>OTP UI | 7 days 50 projects</title>
      </Head>
      <CenterContainer>
        <Frame>
          <h2>Fill in your OTP</h2>
          <OTPInputGrid>
            {[...new Array(6)].map((_, index) => {
              return (
                <Input
                  type='number'
                  min={0}
                  max={9}
                  placeholder='0'
                  key={index}
                  ref={el => (references.current[index] = el)}
                  onChange={changeHandler}
                  onKeyDown={event => keyDownHandler(event, index)}
                />
              );
            })}
          </OTPInputGrid>
        </Frame>
      </CenterContainer>
    </>
  );
}

const Frame = styled.main`
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 2rem;
  place-items: center;
  padding: 2rem;
`;

const OTPInputGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-gap: 1.5rem;
`;

const Input = styled.input`
  padding: 1rem;
  width: 6rem;
  display: block;
  background-color: inherit;
  font: inherit;
  font-size: 3rem;
  text-align: center;
  border: 2px solid ${colors.darkSlate};
  border-radius: ${sizes.radius.small};

  &:focus {
    outline: none;
    border: 2px solid ${colors.primary};
    color: ${colors.primary};
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  & {
    -moz-appearance: textfield;
  }
`;
