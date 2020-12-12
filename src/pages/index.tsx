import Head from 'next/head';
import { GetServerSideProps } from 'next';
import Image from 'next/image';
import styled from 'styled-components';
import axios from 'axios';

import { colors } from '../constants/theme';
import { Container, Heading, Section } from '../components/Utilities';
import Nav from '../components/NavigationBar';
import DevCard from '../components/DevCard';
import Project from '../components/Project';
import Footer from '../components/Footer';

export default function Home({ apps, team }: IProps) {
  return (
    <>
      <Head>
        <title>7 Days 50 Projects</title>
      </Head>
      <Nav />
      <Hero>
        <Heading center>50 Projects in 7 Days </Heading>
        <p>Using</p>
        <LogoContainer>
          <img src='/typescript.png' />
          <img src='/next-js.svg' />
          <img src='/styledcomponent.png' />
        </LogoContainer>
        <BgImage src='https://raw.githubusercontent.com/benxene/blobs/main/benxene-wo-name.png' />
      </Hero>
      <Section>
        <Container>
          <Heading center>Index</Heading>
          <ProjectsGrid>
            {apps?.map((app: { file: string; name: string }, num: number) => {
              return (
                <Project
                  day={num + 1}
                  key={app.file}
                  image={`screenshots/${app.file}.jpg`}
                  link={`/${app.file}`}
                >
                  {app.name}
                </Project>
              );
            })}
          </ProjectsGrid>
        </Container>
      </Section>
      <Section bgColor={colors.darkSlate} textColor={colors.contrast.darkSlate}>
        <Container>
          <Heading center>Our Team</Heading>
        </Container>
        <TeamGrid>
          {team.map(contributor => {
            return (
              !(contributor.login === 'imgbot[bot]') && (
                <DevCard
                  key={contributor.login}
                  avatar={contributor.avatar_url}
                  name={contributor.login}
                  contributions={contributor.contributions}
                  profile={`https://github.com/${contributor.login}`}
                />
              )
            );
          })}
        </TeamGrid>
      </Section>
      <Footer />
    </>
  );
}

interface IProps {
  apps: Array<{ name: string; file: string }>;
  team: Array<{
    login: string;
    avatar_url: string;
    contributions: number;
  }>;
}

export const getServerSideProps: GetServerSideProps = async _ => {
  const baseUrl =
    process.env.NODE_ENV === 'production'
      ? 'https://7days50projects.vercel.app'
      : 'http://localhost:3000';
  const { apps } = await (
    await axios.get('/api/get-projects', {
      baseURL: baseUrl
    })
  ).data;

  const team = (
    await axios.get('https://api.github.com/repos/benxene/7days-50projects/contributors')
  ).data;

  return {
    props: {
      apps,
      team
    }
  };
};

const Hero = styled.div`
  min-height: 60rem;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(to right bottom, rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.6)),
    url('https://images.unsplash.com/photo-1581893106728-1e2197903b0a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80');

  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  color: ${colors.contrast.primary};
  position: relative;
`;

// linear-gradient(to bottom, ${colors.primary}, ${colors.secondary})

const BgImage = styled.img`
  position: absolute;
  width: 60rem;
  height: 60rem;
  opacity: 0.2;
`;

const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 2rem;

  img {
    height: 5rem;
    width: 5rem;
    margin-right: 1rem;

    @media (max-width: 600px) {
      height: 7rem;
      width: 7rem;
    }
  }
`;

const ProjectsGrid = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-auto-rows: minmax(18rem, 1fr);
  grid-gap: 2.6rem;
`;

const TeamGrid = styled.div`
  display: flex;
  max-width: 90%;
  margin: 1rem auto;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  & > *:not(:last-child) {
    margin-right: 1.5rem;
  }

  & > * {
    margin-bottom: 1.5rem;
  }
`;
