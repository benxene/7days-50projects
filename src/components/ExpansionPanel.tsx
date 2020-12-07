import styled from 'styled-components';
import { useState, useEffect, useRef } from 'react';

import { VscChevronDown, VscError } from 'react-icons/vsc';

interface faqProps {
  ind: number;
  question: string;
  answer: string;
}

export default function ExpansionPanel({ ind, question, answer }: faqProps) {
  const [open, setOpen] = useState(false);

  const contentRef = useRef<any>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.style.maxHeight = open ? `${contentRef.current.scrollHeight}px` : '0px';
    }
  }, [contentRef, open]);

  return (
    <Container key={ind} onClick={() => setOpen(old => !old)}>
      <Question active={open}>
        <h6>{question}</h6>
        {open ? <VscError /> : <VscChevronDown />}
      </Question>
      <Answer ref={contentRef}>
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
  border-radius: 1rem;
  cursor: pointer;
`;

const Question = styled.div<{ active: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: ${props => (props.active ? '2rem' : '1rem')};

  & svg {
    font-size: 30px;
    font-weight: bold;
    margin-left: 4rem;
  }

  & h6 {
    font-size: 2rem;
    font-weight: 400;
  }
`;

const Answer = styled.div`
  transition: all 1s;
  overflow: hidden;
  transition: max-height 0.4s ease;

  & p {
    color: #d6d6d6;
  }
`;
