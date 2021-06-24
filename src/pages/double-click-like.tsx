import Head from 'next/head';

import { CenterContainer } from '../components/Utilities';
import { InstaPost } from '../components';

export default function DoubleClickLike() {
  return (
    <>
      <Head>
        <title>Double Click Like | 7 days 50 projects</title>
      </Head>
      <CenterContainer color='primary'>
        <InstaPost avatar='/batman.jpg' name='Batman' image='/batman.jpg' />
      </CenterContainer>
    </>
  );
}
