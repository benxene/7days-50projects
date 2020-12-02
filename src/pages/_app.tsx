import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  // TODO: Write Global styles
  return (
    <>
      <Head>
        <link
          rel="icon"
          href="favicon.png"
          sizes="16x16 28x28 32x32"
          type="image/png"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
