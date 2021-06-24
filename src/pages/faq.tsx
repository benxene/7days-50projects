import Head from 'next/head';
import styled from 'styled-components';

import { colors } from '../constants/theme';

import ExpansionPanel from '../components/ExpansionPanel';

const content = [
  {
    question: 'Why shouldn\'t we trust atoms?',
    answer: 'They make up everything'
  },
  {
    question: 'What do you call someone with no body and no nose?',
    answer: 'Nobody knows.'
  },
  {
    question: 'What\'s the object-oriented way to become wealthy?',
    answer: 'Inheritance.'
  },
  {
    question: 'How many tickles does it take to tickle an octopus?',
    answer: 'Ten-tickles!'
  },
  {
    question: 'What is: 1 + 1?',
    answer: 'Depends on who are you asking.'
  }
];

export default function FAQ() {
  return (
    <>
      <Head>
        <title>FAQ | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <h1>Frequently Asked Questions</h1>
          {content.map((val, ind: number) => {
            return (
              <ExpansionPanel key={ind} ind={ind} question={val.question} answer={val.answer} />
            );
          })}
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  display: flex;
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;
`;

const Main = styled.div`
  & > h1 {
    text-align: center;
    font-size: 3rem;
    font-weight: 500;
    margin-bottom: 4rem;
  }
`;
