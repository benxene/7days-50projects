import styled from 'styled-components';
import Head from 'next/head';
import { Section } from '../components/Utilities';
import { useEffect, useState } from 'react';

const messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'];

const types = ['success', 'info', 'error', 'important'];

export default function ToastNotification() {
  const [clicks, setClicks] = useState<number[]>([]);

  function createNotification() {
    setClicks(old => {
      old.push(Math.floor(Math.random() * messages.length));
      return [...old];
    });
    setTimeout(() => {
      setClicks(old => {
        old.pop();
        return [...old];
      });
    }, 3000);
  }

  useEffect(() => {
    console.log(clicks);
  }, [createNotification]);

  return (
    <>
      <Head>
        <title>Toast Notification | 7 days 50 projects</title>
      </Head>
      <MySection>
        <Toasts>
          {clicks.map((click, index) => {
            return (
              <Toast key={index} type={types[index]}>
                {messages[click]}
              </Toast>
            );
          })}
        </Toasts>
        <NotiButton onClick={() => createNotification()}>Show Notification</NotiButton>
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
  align-items: flex-end;
`;

const Toast = styled.div<{ type: string }>`
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem 2rem;
  margin: 0.5rem;
  color: ${props =>
    props.type === 'info'
      ? 'rebeccapurple'
      : props.type === 'success'
      ? 'green'
      : props.type === 'error'
      ? 'red'
      : 'royalblue'};
`;
