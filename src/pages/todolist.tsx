import Head from 'next/head';
import { useState } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

interface ListItem {
  ind: number;
  val: string;
  setList: Function;
}

const ListItem = ({ ind, val, setList }: ListItem) => {
  const [done, setDone] = useState(false);

  const handleRemove = (e: any) => {
    e.preventDefault();
    setList((old: any) => {
      old.splice(ind, 1);
      return [...old];
    });
  };

  return (
    <li
      key={ind + val}
      onClick={() => setDone(done => !done)}
      onContextMenu={handleRemove}
      style={done ? { textDecoration: 'line-through', color: 'rgba(0, 0, 0, 0.2)' } : {}}
    >
      {val}
    </li>
  );
};

export default function ToDoList() {
  const [item, setItem] = useState('');
  const [list, setList] = useState(['Item 1']);

  const handleKeyPress = (e: any) => {
    if (e.key === 'Enter') {
      setList(old => [...old, item]);
      setItem('');
    }
  };

  return (
    <>
      <Head>
        <title>To Do List</title>
      </Head>
      <Section>
        <Header>todos</Header>
        <Main>
          <input
            placeholder='Enter your todo'
            value={item}
            onChange={e => setItem(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <ul>
            {list.map((val, ind) => {
              return <ListItem val={val} ind={ind} key={ind} setList={setList} />;
            })}
          </ul>
        </Main>
        <Footer>
          <p>Left click to toggle completed</p>
          <p>Right click to delete todo</p>
        </Footer>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
  position: relative;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 9rem;
`;

const Header = styled.h1`
  font-size: 15rem;
  color: rgba(255, 255, 255, 0.6);
  margin-bottom: 7rem;
`;

const Main = styled.div`
  background-color: ${colors.contrast.primary};
  max-width: 50rem;
  margin: 2rem auto;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3);
  border-radius: 0.5rem;

  & ul {
    list-style: none;
    text-align: left;

    & li {
      color: #444;
      font-size: 2rem;
      padding: 1rem 2rem;
      border-top: 1px solid #e5e5e5;
      transition: all 0.2s;
    }
  }

  & input {
    padding: 1rem 2rem;
    font-size: 3rem;
    border: none;
    width: 100%;
    border-top-left-radius: 0.5rem;
    border-top-right-radius: 0.5rem;
    margin-bottom: 0.2rem;

    &::placeholder {
      color: #d5d5d5;
    }

    &:focus {
      outline-color: ${colors.secondary};
    }
  }
`;

const Footer = styled.div`
  padding: 3rem 0;
  position: absolute;
  width: 100%;
  bottom: 0%;
  & > p {
    color: rgba(255, 255, 255, 0.6);
  }
`;
