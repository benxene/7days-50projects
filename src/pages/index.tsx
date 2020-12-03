import Head from 'next/head';
import styled from 'styled-components';

import { Container, Heading, Section } from '../components/Utilities';
import Project from '../components/Project';
import { colors } from '../constants/theme';

export default function Home() {
  return (
    <>
      <Head>
        <title>7 Days 50 Projects</title>
      </Head>
      <Hero>
        <Heading>7 Days 50 Projects</Heading>
        <p>using Next JS and styled-components</p>
      </Hero>
      <Section>
        <Container>
          <Heading center>Index</Heading>
          <ProjectsGrid>
            <Project day={1} image='index.png' link='#'>
              Index page
            </Project>
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
  grid-template-columns: repeat(auto-fill, 25rem);
  grid-auto-rows: minmax(18rem, 1fr);
  grid-gap: 1.6rem;
`;
