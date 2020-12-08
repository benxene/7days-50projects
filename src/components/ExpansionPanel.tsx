import styled from 'styled-components';
import { useState } from 'react';

import { VscChevronDown, VscError } from 'react-icons/vsc';
import { sizes } from '../constants/theme';

interface faqProps {
  ind: number;
  question: string;
  answer: string;
}

export default function ExpansionPanel({ ind, question, answer }: faqProps) {
  const [open, setOpen] = useState(false);

  return (
    <Container key={ind} onClick={() => setOpen(old => !old)}>
      <Question>
        <h6>{question}</h6>
        {open ? <VscError /> : <VscChevronDown />}
      </Question>
      <Answer active={open}>
        <p>{answer}</p>
      </Answer>
    </Container>
  );
}

const Container = styled.div`
  background-color: #132f63;
  width: 100%;
  margin: 2rem 0;
  padding: 2rem 3rem;
  border-radius: ${sizes.radius.small};
  cursor: pointer;
`;

const Question = styled.div`
  display: grid;
  grid-template-columns: 1fr max-content;
  grid-gap: 2rem;
  align-items: center;

  & svg {
    flex-basis: 3rem;
    font-size: 2.8rem;
  }

  & h6 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const Answer = styled.div<{ active: boolean }>`
  margin-top: ${({ active }) => (active ? '2rem' : 0)};
  max-height: ${({ active }) => (active ? 'auto' : 0)};
  opacity: ${({ active }) => (active ? 1 : 0)};
  overflow: hidden;
  transition: all 0.3s ease;
  & > p {
    color: #d6d6d6;
  }
`;
