import { useReducer, useRef, useState } from 'react';
import styled from 'styled-components';
import { RiFileCopy2Line, RiAddLine, RiSubtractLine } from 'react-icons/ri';

import { CenterContainer, Heading, Button, Alert } from '../components/Utilities';
import { colors, sizes } from '../constants/theme';
import { initialOptions, reducer } from '../helpers/passgen-reducer';
import { generatePassword } from '../functions/password-generator';
import Head from 'next/head';

export default function passwordGenerator() {
  const [password, setPassword] = useState<string>('');
  const [options, dispatch] = useReducer(reducer, initialOptions);
  const [copied, setCopied] = useState<boolean>(false);
  const textRef = useRef<HTMLInputElement>(null);

  const handleSubmit = () => {
    setPassword(
      generatePassword(
        options.allowSmall,
        options.allowCaps,
        options.allowNumbers,
        options.allowSpecial,
        options.noOfChars
      )
    );
  };

  return (
    <>
      <Head>
        <title>Password generator | 7 Days 50 Projects</title>
      </Head>
      <CenterContainer color='primary'>
        <Frame>
          <Heading small center>
            Password Generator
          </Heading>
          <InputArea>
            <Input
              type='text'
              onChange={({ target }) => {
                const { value } = target;
                setPassword(value);
              }}
              ref={textRef}
              value={password}
            />
            <button
              onClick={() => {
                textRef.current?.select();
                if (password === '') return;
                setCopied(true);
                document.execCommand('copy');
                setTimeout(() => setCopied(false), 4000);
              }}
            >
              <RiFileCopy2Line />
            </button>
          </InputArea>
          <InputArea>
            <p>Number of characters:</p>
            <button onClick={() => dispatch('decrease')}>
              <RiSubtractLine />
            </button>
            <Input type='text' readOnly value={options.noOfChars} />
            <button onClick={() => dispatch('increase')}>
              <RiAddLine />
            </button>
          </InputArea>
          <InputArea>
            <p>Allow Capital letters?</p>
            <Input type='checkbox' onChange={() => dispatch('allowCaps')} checked={options.allowCaps} />
          </InputArea>
          <InputArea>
            <p>Allow small letters?</p>
            <Input type='checkbox' onChange={() => dispatch('allowSmall')} checked={options.allowSmall} />
          </InputArea>
          <InputArea>
            <p>Allow numbers?</p>
            <Input type='checkbox' onChange={() => dispatch('allowNumbers')} checked={options.allowNumbers} />
          </InputArea>
          <InputArea>
            <p>Allow special characters?</p>
            <Input type='checkbox' onChange={() => dispatch('allowSpecial')} checked={options.allowSpecial} />
          </InputArea>
          <Button color='secondary' onClick={handleSubmit}>
            Generate
          </Button>
        </Frame>
        {copied && (
          <Alert color='white' bgColor='#00b029'>
            Copied
          </Alert>
        )}
      </CenterContainer>
    </>
  );
}

interface IOptions {
  noOfChars: number;
  allowCaps: boolean;
  allowSmall: boolean;
  allowNumbers: boolean;
  allowSpecial: boolean;
}

const Frame = styled.div`
  width: 50rem;
  height: 40rem;
  padding: 2rem;
  background-color: ${colors.darkSlate};
  border-radius: ${sizes.radius.small};
  color: ${colors.contrast.primary};
  box-shadow: 0 0.3rem 0.5rem rgba(10, 10, 10, 0.3);

  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: minmax(3rem, min-content);
  grid-gap: 1rem;
`;

const InputArea = styled.div`
  display: flex;
  align-items: center;

  & > input[type='text'] {
    align-self: stretch;
  }

  & > input,
  p {
    &:first-child {
      margin-right: 1rem;
      flex: 1;
    }

    &:not(:first-child) {
      max-width: 4rem;
    }
  }

  & > button {
    background-color: rgba(0, 0, 0, 0.4);
    padding: 0.5rem 1rem;
    font-size: 2rem;
    color: ${colors.secondary};
    border: 1px solid ${colors.secondary};
    border-radius: 3px;
    display: grid;
    place-content: center;
    place-items: center;
    align-self: stretch;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: ${colors.secondary};
      color: ${colors.contrast.primary};
    }
  }
`;

const Input = styled.input`
  font-family: inherit;
  font-size: inherit;
  padding: 0.6rem 1rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: inherit;
  border: 1px solid ${colors.secondary};
  border-radius: 3px;
  transition: all 0.2s;
  &:focus {
    outline: none;
  }
`;
