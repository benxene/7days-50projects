import Head from 'next/head';
import { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { colors } from '../constants/theme';

export default function FAQ() {
  const [data, setData] = useState([]);
  const [load, setLoad] = useState(true);
  const [originalData, setOriginalData] = useState([]);
  const [search, setSearch] = useState('');

  const getUser = async () => {
    const userUrl = 'https://randomuser.me/api?results=50';
    try {
      const { data } = await axios.get(userUrl);
      setData(data.results);
      setOriginalData(data.results);
      setLoad(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getUser();
  }, []);

  useEffect(() => {
    if (search === '') {
      setData(originalData);
    } else {
      const filteredData = originalData.filter((val: any) => {
        if (
          val.name.first.toLowerCase().includes(search.toLowerCase()) ||
          val.name.last.toLowerCase().includes(search.toLowerCase()) ||
          val.location.city.toLowerCase().includes(search.toLowerCase()) ||
          val.location.country.toLowerCase().includes(search.toLowerCase())
        ) {
          return true;
        } else {
          return false;
        }
      });
      setData(filteredData);
    }
  }, [search]);

  return (
    <>
      <Head>
        <title>Live User Search | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <div>
            <h4>Live User Filter</h4>
            <p>Search by name and/or location</p>
            <input
              type='text'
              placeholder='Search'
              value={search}
              onChange={e => setSearch(e.target.value)}
            ></input>
          </div>
          {!load && (
            <ul>
              {data.length === 0 ? (
                <li style={{ padding: '2rem', textAlign: 'center' }}>No results Found</li>
              ) : (
                <>
                  {data.map((val: any, ind: number) => {
                    return (
                      <li key={ind}>
                        <Card
                          image={val.picture.large}
                          name={`${val.name.first} ${val.name.last}`}
                          location={`${val.location.city},${val.location.country}`}
                        />
                      </li>
                    );
                  })}
                </>
              )}
            </ul>
          )}
        </Main>
      </Section>
    </>
  );
}

const Card = ({ image, name, location }: any) => {
  return (
    <StyledCard>
      <div>
        <img src={image} alt={'img'}></img>
      </div>
      <div>
        <h2>{name}</h2>
        <p>{location}</p>
      </div>
    </StyledCard>
  );
};

const Section = styled.section`
  min-height: 100vh;
  background-color: #fff;
  display: flex;
  padding: 5rem 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #000;
`;

const Main = styled.div`
  border-radius: 1rem;
  box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
  overflow: hidden;

  & > div {
    background-color: ${colors.primary};
    color: #fff;
    padding: 3rem 2rem;

    & p {
      display: inline-block;
      margin: 5px 0 2rem;
      opacity: 0.8;
    }

    & input {
      background-color: #173469;
      border: 0;
      border-radius: 5rem;
      color: #fff;
      font-size: 1.5rem;
      padding: 1rem 1.5rem;
      width: 100%;
      outline: none;

      &::placeholder {
        color: #d1d1d1;
      }
    }
  }

  & > ul {
    list-style: none;
    max-height: 30rem;
    overflow: auto;

    li {
      &:not(:last-of-type) {
        border-bottom: 1px solid #eee;
      }
    }
  }
`;

const StyledCard = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  padding: 1rem 2rem;

  & div {
    & :nth-child(1) {
      height: 6rem;
      width: 6rem;
      border-radius: 100%;
      overflow: hidden;
      margin: 1rem;

      img {
        width: 100%;
        object-fit: cover;
        object-position: center;
      }
    }

    & :nth-child(2) {
      margin: 1rem;

      h2 {
        font-size: 2rem;
        font-weight: 500;
        margin: 1rem 0;
      }

      p {
        font-size: 1.5rem;
      }
    }
  }
`;
