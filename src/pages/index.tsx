import Head from 'next/head';
import styled from 'styled-components';
import fs from 'fs';

import Nav from '../components/NavigationBar';
import { Container, Heading, Section } from '../components/Utilities';
import Project from '../components/Project';
import { colors } from '../constants/theme';
import { GetServerSideProps } from 'next';
import { useEffect } from 'react';

export default function Home({ apps }: any) {
  useEffect(() => console.log(apps), []);

  return (
    <>
      <Head>
        <title>7 Days 50 Projects</title>
      </Head>
      <Nav />
      <Hero>
        <Heading center>7 Days 50 Projects</Heading>
        <p>using Next JS and styled-components</p>
      </Hero>
      <Section>
        <Container>
          <Heading center>Index</Heading>
          <ProjectsGrid>
            {apps.map((app: { file: string; name: string }, num: number) => {
              return (
                <Project day={num + 1} key={app.file} image={`screenshots/${app.file}.png`} link={app.file}>
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
      </Section>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async _ => {
  let files = fs.readdirSync('./src/pages');
  files = files.map((file, _) => {
    return file.replace('.tsx', '');
  });

  files.splice(files.indexOf('_app'), 1);

  const apps = files.map((file, _) => {
    let name = file.replace(/-/g, ' ');
    if (name === 'index') name = 'Sticky nav';
    name = name.charAt(0).toUpperCase() + name.substr(1);
    return { name, file };
  });

  return {
    props: {
      apps
    }
  };
};

const Hero = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${colors.primary};
  color: ${colors.contrast.primary};
`;

const ProjectsGrid = styled.div`
  display: grid;
  place-content: center;
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-auto-rows: minmax(18rem, 1fr);
  grid-gap: 2.6rem;
`;
