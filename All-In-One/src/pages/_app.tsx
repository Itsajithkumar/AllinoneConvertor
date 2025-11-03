import { AppProps } from 'next/app';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>All-in-One - Your Ultimate Tool for Image Processing</title>
        <meta name="description" content="All-in-One image utilities: Convert images to text, translate images, and more without a subscription model." />
        <link rel="canonical" href="https://www.yoursaasdomain.com/" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;