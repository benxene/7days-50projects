import Head from 'next/head';
import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';

import { colors } from '../constants/theme';

interface ListItem {
  ind: number;
  val: string;
  active: boolean;
}

const ListItem = ({ ind, val, active }: ListItem) => {
  return (
    <li key={ind + val} style={active ? { backgroundColor: colors.secondary } : {}}>
      {val}
    </li>
  );
};

export default function RandomChoicePicker() {
  const [item, setItem] = useState('');
  const [list, setList] = useState<Array<string>>([]);
  const [active, setActive] = useState<number | null>(null);

  const intervalRef = useRef<number>(); // used to clear out interval

  const handleKeyPress = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      intervalRef.current = setInterval(() => {
        setActive(Math.floor(Math.random() * list.length));
      }, 100);

      setTimeout(() => {
        clearInterval(intervalRef.current);
      }, 100 * list.length);

      setItem('');
    }
  };

  useEffect(() => {
    let str = item.trim(); //to clear out blank space at end
    if (str === '') {
      if (list[0] && list[0].length === 1) {
        setList([]);
      }
      return;
    }

    if (active || active === 0) {
      setActive(null);
    }
    const stringList = str.split(','); // converting string into array
    setList(stringList.filter(val => val !== ''));
  }, [item]);

  return (
    <>
      <Head>
        <title>Random Choice Picker | 7 days 50 projects</title>
      </Head>
      <Section>
        <Header>
          <h4>Enter all of the choices divided by a comma (',').</h4>
          <h4>Press enter when you're done</h4>
        </Header>
        <Main>
          <textarea
            placeholder='Enter choices here ...'
            value={item}
            onChange={e => setItem(e.target.value)}
            onKeyDown={handleKeyPress}
          />
          <ul>
            {list.map((val, ind) => {
              return <ListItem val={val} ind={ind} key={ind} active={ind === active} />;
            })}
          </ul>
        </Main>
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Header = styled.div`
  margin: 1rem 0.5rem;
  & h4 {
    font-size: 2rem;
    color: ${colors.contrast.primary};
  }
`;

const Main = styled.div`
  background-color: transparent;
  max-width: 50rem;
  margin: 2rem auto;

  & ul {
    list-style: none;
    text-align: left;

    & li {
      background-color: rgba(0, 0, 0, 0.2);
      color: #fff;
      border-radius: 5rem;
      padding: 1rem 2rem;
      margin: 0 0.5rem 1rem 0;
      font-size: 1.5rem;
      display: inline-block;
    }
  }

  & textarea {
    padding: 1rem 2rem;
    font-size: 2.5rem;
    border: none;
    width: 50rem;
    height: 18rem;
    border-radius: 0.5rem;
    margin-bottom: 2rem;

    @media (max-width: 550px) {
      width: 40rem;
    }

    @media (max-width: 450px) {
      width: 100%;
    }

    &::placeholder {
      color: #d5d5d5;
    }

    &:focus {
      outline-color: ${colors.secondary};
    }
  }
`;
