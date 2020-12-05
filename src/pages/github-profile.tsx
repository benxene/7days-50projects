import Head from 'next/head';
import { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

import { colors } from '../constants/theme';

import { Alert } from '../components/Utilities';

const initialData = {
  avatar_url: '',
  bio: null,
  name: null,
  followers: null,
  following: null,
  public_repos: null
};

export default function DadJokes() {
  const [name, setName] = useState('');

  const [data, setData] = useState(initialData);
  const [repo, setRepo] = useState<Array<object>>([]);
  const [alert, setAlert] = useState({
    open: false,
    message: ''
  });

  const getUser = async () => {
    const userUrl = `https://api.github.com/users/${name}`;
    const repoUrl = `https://api.github.com/users/${name}/repos?sort=created`;
    try {
      const { data } = await axios.get(userUrl);
      const res = await axios.get(repoUrl);
      setData(data);
      setRepo(res.data.filter((data: object, ind: number) => ind < 5));
    } catch (err) {
      if (err.response) {
        if (err.response.status === 404) {
          setAlert({
            open: true,
            message: 'Profile not found'
          });
        } else {
          setAlert({
            open: true,
            message: 'Unable to find user'
          });
        }
      } else {
        console.error(err);
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      getUser();
    }
  };

  return (
    <>
      <Head>
        <title>GITHUB Profiles | 7 days 50 projects</title>
      </Head>
      <Section>
        <Main>
          <input placeholder='search a github user' value={name} onChange={handleChange} onKeyDown={handleKeyPress} />

          {initialData !== data && (
            <div>
              <div>
                <img src={data.avatar_url} alt={'img'}></img>
              </div>
              <div>
                <h2>{data.name}</h2>
                <p>{data.bio}</p>
                <ul>
                  <li>
                    {data.followers} <strong>Followers</strong>
                  </li>
                  <li>
                    {data.following} <strong>Following</strong>
                  </li>
                  <li>
                    {data.public_repos} <strong>Repos</strong>
                  </li>
                </ul>
                {repo.map((value: any, ind: number) => {
                  return <Repo key={ind}>{value.name}</Repo>;
                })}
              </div>
            </div>
          )}
        </Main>
        {alert.open && (
          <Alert color='white' bgColor='#00b029'>
            {alert.message}
          </Alert>
        )}
      </Section>
    </>
  );
}

const Section = styled.section`
  min-height: 100vh;
  background-color: ${colors.primary};
  color: ${colors.contrast.darkSlate};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
`;

const Main = styled.div`
  & > div {
    background-color: #81a7ec;
    border-radius: 2.5rem;
    box-shadow: 0 0.5rem 1rem rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
    display: flex;
    justify-content: space-around;
    align-items: center;
    flex-wrap: wrap;
    padding: 3rem;
    margin: 2rem 1.5rem;

    & div {
      color: #fff;

      & :nth-child(1) {
        height: 15rem;
        width: 15rem;
        border-radius: 100%;
        overflow: hidden;
        margin: 1rem;
        border: 1rem solid #2353ac;

        img {
          width: 100%;
          object-fit: cover;
          object-position: center;
        }
      }

      & :nth-child(2) {
        margin: 1rem;

        h2 {
          font-size: 3rem;
          margin: 1rem 0;
        }

        p {
          margin: 1rem 0;
        }

        ul {
          list-style: none;
          display: flex;
          flex-wrap: wrap;
          margin-bottom: 1rem;

          li {
            &:not(:last-child) {
              margin-right: 1rem;
            }
          }
        }
      }
    }
  }

  & input {
    width: 80%;
    margin: 0 auto;
    min-width: 25rem;
    max-width: 50rem;
    display: block;
    background-color: #81a7ec;
    border: none;
    border-radius: 1rem;
    color: #fff;
    padding: 1.5rem;
    font-family: inherit;
    font-size: 1.5rem;
    box-shadow: 0 0.5rem 1rem rgba(154, 160, 185, 0.05), 0 15px 40px rgba(0, 0, 0, 0.1);
    outline: none;

    &::placeholder {
      color: #eeeeee;
    }
  }
`;

const Repo = styled.p`
  background-color: #2353ac;
  font-size: 1rem;
  display: inline-block;
  margin: 0.5rem !important;
  padding: 0.5rem;
  color: #fff;
`;
