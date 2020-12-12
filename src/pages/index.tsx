import Head from 'next/head';
import { GetServerSideProps } from 'next';
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
        <Heading center>7 Days 50 Projects</Heading>
        <p>using Next JS and styled-components</p>
        <LogoContainer>
          <img src='/styledcomponent.png'></img>
          <img src='/next-js.svg'></img>
          <img src='/typescript.png'></img>
        </LogoContainer>
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
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
  position: relative;
`;

const LogoContainer = styled.div`
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;

  img {
    display: inline-block;
    height: 10rem;
    width: 10rem;

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
