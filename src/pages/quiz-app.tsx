import styled from 'styled-components';
import Head from 'next/head';
import { colors } from '../constants/theme';

export default function QuizApp() {
  return (
    <>
      <Head>
        <title>Quiz App | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        <QuizContainer>
          <Button type='button'>Submit</Button>
        </QuizContainer>
      </MyContainer>
    </>
  );
}

const MyContainer = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: #b8c6db;
  background-image: linear-gradient(315deg, #b8c6db 0%, #f5f7fa 100%);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const QuizContainer = styled.div`
  position: relative;
  width: 40vw;
  height: 70vh;
  background-color: ${colors.contrast.primary};
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);
`;

const Button = styled.button`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 10vh;
  background-color: ${colors.primary};
  border: none;
  outline: none;
  color: ${colors.contrast.primary};
  font-size: 2rem;
  font-family: inherit;
  border-radius: 0px 0px 10px 10px;
  cursor: pointer;

  ::hover {
    background-color: ${colors.primary} 80%;
  }
`;
