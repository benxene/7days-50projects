import Head from 'next/head';
import { CenterContainer } from '../components/Utilities';
import { RippleButton } from '../components';

export default function RippleButtonPage() {
  return (
    <>
      <Head>
        <title>Ripple Button | 7 Days 50 Projects</title>
      </Head>
      <CenterContainer>
        <RippleButton>Click me</RippleButton>
      </CenterContainer>
    </>
  );
}
