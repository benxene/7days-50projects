import styled, { keyframes } from 'styled-components';
import Head from 'next/head';
import { Section } from '../components/Utilities';
import { useEffect, useState } from 'react';

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];

const types = ['success', 'info', 'error', 'important'];

export default function ToastNotification() {
  const [clicks, setClicks] = useState<number[]>([]);

  function createNotification() {
    setClicks(old => {
      return [...old, Math.floor(Math.random() * messages.length)];
    });
    setTimeout(() => {
      setClicks(old => {
        old.shift();
        return [...old];
      });
    }, 3000);
  }

  useEffect(() => {}, [createNotification, clicks]);

  return (
    <>
      <Head>
        <title>Toast Notification | 7 days 50 projects</title>
      </Head>
      <MySection>
        <Toasts>
          {clicks.map((click, index) => {
            return (
              <Toast key={index} type={types[click]}>
                {messages[click]}
              </Toast>
            );
          })}
        </Toasts>
        <NotiButton onClick={createNotification}>Show Notification</NotiButton>
      </MySection>
    </>
  );
}

const MySection = styled(Section)`
  margin: 0;
  padding: 0;
  background-color: rebeccapurple;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const NotiButton = styled.button`
  padding: 2rem;
  border: none;
  font-size: inherit;
  border-radius: 3px;
  color: rebeccapurple;
  font-weight: bold;
  font-size: 1.3rem;
  cursor: pointer;
  transition: all 0.3s;

  :focus {
    outline: none;
  }

  :active {
    transform: scale(0.9);
  }
`;

const Toasts = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
`;

const toastAnimation = keyframes`
  0% {
    opacity: 0;
  }

  10%{
    opacity: 1;
  }

  90% {
    opacity: 1;
  }


  100% {
    opacity: 0;
  }
`;

const Toast = styled.div<{ type: string }>`
  background-color: #fff;
  border-radius: 5px;
  padding: 1.5rem 2.5rem;
  margin: 0.5rem;
  color: ${props =>
    props.type === 'info'
      ? 'rebeccapurple'
      : props.type === 'success'
      ? 'green'
      : props.type === 'error'
      ? 'red'
      : 'royalblue'};

  /* animation: ${toastAnimation} 3s ease-in-out; */
`;
