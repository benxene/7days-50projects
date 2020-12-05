import { useState } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styled from 'styled-components';

import { colors } from '../constants/theme';
import questions from '../constants/quiz-questions';

export default function QuizApp() {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [curAns, setCurAns] = useState<number>();
  const [userScore, setUserScore] = useState<number>(0);

  const router = useRouter();

  return (
    <>
      <Head>
        <title>Quiz App | 7 days 50 projects</title>
      </Head>
      <MyContainer>
        {questionNumber === 4 ? (
          <Result>
            <h3>Your Score: {userScore}</h3>
            <Button onClick={router.reload}>Reload</Button>
          </Result>
        ) : (
          <QuizContainer>
            <QuestionContainer>
              <Question>{questions[questionNumber].question}</Question>
              {questions[questionNumber].options.map((option, index) => {
                return (
                  <OptionContainer key={option}>
                    <input
                      type='radio'
                      id={index.toString()}
                      name='option'
                      onClick={() => {
                        setCurAns(index);
                      }}
                    />
                    <Options>
                      <Label htmlFor={index.toString()}>{option}</Label>
                    </Options>
                  </OptionContainer>
                );
              })}
              <Button
                type='button'
                onClick={() => {
                  if (curAns === undefined) {
                    console.log('undefined curAns');
                    return;
                  }
                  const score = Number(curAns === questions[questionNumber].answer) * 25;
                  setUserScore(old => old + score);
                  setQuestionNumber(count => count + 1);
                }}
              >
                Submit
              </Button>
            </QuestionContainer>
          </QuizContainer>
        )}
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

const Result = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50rem;
  height: 25rem;
  font-weight: 800;
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
  font-size: 3.5rem;
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 35rem) {
    background: transparent;
    box-shadow: unset;
    height: 100vh;
    width: 100vw;
    color: ${colors.primary};

    button {
      border-radius: unset;
    }
  }
`;

const QuizContainer = styled.div`
  position: relative;
  width: 50rem;
  height: 70vh;
  background-color: ${colors.contrast.primary};
  border-radius: 10px;
  box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.2);

  @media (max-width: 35rem) {
    width: 100%;
    height: 100vh;
    border-radius: unset;

    button {
      border-radius: unset;
    }
  }
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
  transition: all 0.4s;

  :hover {
    background-color: #1d59c7;
  }
`;

const QuestionContainer = styled.div`
  padding: 5rem;
`;

const Question = styled.h2`
  margin: 2rem auto;
  text-align: center;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem;
`;

const Options = styled.div`
  margin-left: 2rem;
`;

const Label = styled.label`
  font-size: 2rem;
  font-weight: 400;

  &:hover {
    cursor: pointer;
  }
`;
