import Head from 'next/head';
import { CenterContainer, Heading } from '../components/Utilities';
import { Slider } from '../components';

export default function CustomSlider() {
  return (
    <>
      <Head>
        <title>Custom Slider | 7 days 50 projects</title>
      </Head>
      <CenterContainer>
        <Heading>Custom slider</Heading>
        <Slider />
      </CenterContainer>
    </>
  );
}
