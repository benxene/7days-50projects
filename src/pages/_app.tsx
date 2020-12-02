import Head from 'next/head';
import type { AppProps } from 'next/app';
import { createGlobalStyle } from 'styled-components';

import { colors } from '../constants/theme';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='icon' href='favicon.png' sizes='16x16 28x28 32x32' type='image/png' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link href='https://fonts.googleapis.com/css2?family=Manrope:wght@300;400;800&display=swap' rel='stylesheet' />
      </Head>
      <GlobalStyle />
      <Component {...pageProps} />
    </>
  );
}

const GlobalStyle = createGlobalStyle`
    *, *::after, *::before {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }

    html {
      font-size: 65%;
    }

    body {
      font-family: Manrope, sans-serif;
      font-size: 1.6rem;
    }

    a {
      color: ${colors.secondary};
      text-decoration: none;
    }
  `;
