import Head from 'next/head';
import styled from 'styled-components';

import { colors } from '../constants/theme';

export default function FormWave() {
  return (
    <>
      <Head>
        <title>Form Wave | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <h1>Please Login</h1>
          <form action='/'>
            <FormComponent>
              <input type='text' required />
              <label>
                <span style={{ transitionDelay: '0ms' }}>E</span>
                <span style={{ transitionDelay: '50ms' }}>m</span>
                <span style={{ transitionDelay: '100ms' }}>a</span>
                <span style={{ transitionDelay: '150ms' }}>i</span>
                <span style={{ transitionDelay: '200ms' }}>l</span>
              </label>
            </FormComponent>
            <FormComponent>
              <input type='password' required />
              <label>
                <span style={{ transitionDelay: '0ms' }}>P</span>
                <span style={{ transitionDelay: '50ms' }}>a</span>
                <span style={{ transitionDelay: '100ms' }}>s</span>
                <span style={{ transitionDelay: '150ms' }}>s</span>
                <span style={{ transitionDelay: '200ms' }}>w</span>
                <span style={{ transitionDelay: '250ms' }}>o</span>
                <span style={{ transitionDelay: '300ms' }}>r</span>
                <span style={{ transitionDelay: '350ms' }}>d</span>
              </label>
            </FormComponent>
            <button type='submit'>Login</button>
            <p>
              Don't have an account? <a href='#'>Register</a>{' '}
            </p>
          </form>
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  display: flex;
  padding: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Main = styled.div`
  background-color: #132f63;
  padding: 2rem 4rem;
  border-radius: 5px;

  & > h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }

  & > form {
    margin: 2rem 0;
  }

  & button {
    cursor: pointer;
    display: inline-block;
    width: 100%;
    background: lightblue;
    padding: 1.3rem 1.5rem;
    font-family: inherit;
    font-size: 1.6rem;
    font-weight: 400;
    border: 0;
    border-radius: 5px;
    margin: 2rem 0;
    outline: none;
  }

  & p {
    font-size: 1.5rem;
  }

  & a {
    text-decoration: none;
    color: ${colors.secondary};
  }
`;

const FormComponent = styled.div`
  position: relative;
  margin: 2rem 0 4rem;
  width: 30rem;

  @media (max-width: 450px) {
    width: 100%;
  }

  & input {
    background-color: transparent;
    outline: none;
    border: 0;
    border-bottom: 2px #fff solid;
    display: block;
    width: 100%;
    padding: 1.5rem 0;
    font-size: 2rem;
    color: #fff;
    transition: border-color 0.4s;

    &:focus {
      outline: 0;
      border-bottom-color: lightblue;
    }

    &:focus + label span,
    &:valid + label span {
      color: lightblue;
      transform: translateY(-30px);
    }
  }

  & label {
    position: absolute;
    top: 1.5rem;
    left: 0;

    span {
      display: inline-block;
      font-size: 1.7rem;
      min-width: 5px;
      transition: 0.3s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    }
  }
`;
