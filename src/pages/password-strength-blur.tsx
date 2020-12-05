import styled from 'styled-components';
import Head from 'next/head';
import { colors, sizes } from '../constants/theme';
import RippleButton from '../components/RippleButton';
import { Alert } from '../components/Utilities';
import { useEffect, useState } from 'react';

export default function PasswordStrengthBlur() {
  const [password, setPassword] = useState<string>('');
  const [visible, setVisible] = useState<boolean>(false);

  useEffect(() => {}, [password]);

  const toggleVisibility = () => {
    setVisible(true);
    setTimeout(() => setVisible(false), 3000);
  };

  return (
    <>
      <Head>
        <title>Password Strength Blur | 7 days 50 projects</title>
      </Head>
      <CustomContainer>
        <Background style={{ filter: `blur(${20 - password.length * 2}px)` }} />
        <Frame>
          <div style={{ textAlign: 'center' }}>
            <h1>Image Password Strength</h1>
            <p>Change the password to see the effect</p>
          </div>
          <div>
            <Label>Email</Label>
            <Input type='email' placeholder='Enter your email' />
          </div>
          <div>
            <Label>Password</Label>
            <Input
              type='password'
              placeholder='Enter your password'
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
          </div>
          <RippleButton onClick={toggleVisibility}>Submit</RippleButton>
        </Frame>
      </CustomContainer>
      {visible && (
        <Alert bgColor={colors.primary} color={colors.contrast.primary}>
          You found that it's dummy, right? ¯\_(ツ)_/¯
        </Alert>
      )}
    </>
  );
}

const CustomContainer = styled.div`
  height: 100vh;
  display: grid;
  place-content: center;
  place-items: center;
`;

const Background = styled.div`
  position: fixed;
  top: -3rem;
  left: -3rem;
  right: -3rem;
  bottom: -3rem;
  z-index: -1;
  background-image: url(https://source.unsplash.com/HN3-ehlNwsc/1920x1280);
  background-size: cover;
  background-position: center center;
`;

const Frame = styled.main`
  display: flex;
  flex-direction: column;
  min-height: 40rem;
  min-width: 50rem;
  background-color: rgba(0, 0, 0, 0.4);
  color: #fff;
  padding: 4rem;
  border-radius: ${sizes.radius.small};
  box-shadow: 0 0.3rem 1rem rgba(0, 0, 0, 0.4);
  justify-content: space-between;
  align-items: center;

  @media (max-width: 40rem) {
    min-width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.2);
    justify-content: space-evenly;
  }

  @media (max-width: 30rem) {
    padding: 2rem;
  }

  & > div {
    width: 100%;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 1rem;
  font: inherit;
  color: inherit;
  border: 1px solid ${colors.lightSlate};
  border-radius: 2px;
  background-color: transparent;

  &::placeholder {
    color: ${colors.lightSlate};
  }

  &:focus,
  &:active {
    outline-color: ${colors.primary};
    border: 1px solid ${colors.primary};
  }
`;

const Label = styled.label`
  display: block;
  margin-bottom: 1rem;
`;
