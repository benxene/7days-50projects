import Head from 'next/head';
import { CenterContainer } from '../components/Utilities';
import RippleButton from '../components/RippleButton';

export default function RippleButtonPage() {
  return (
    <>
      <Head>
        <title>Ripple Button | 7 Days 50 Projects</title>
      </Head>
      <CenterContainer>
        <RippleButton />
      </CenterContainer>
    </>
  );
}
