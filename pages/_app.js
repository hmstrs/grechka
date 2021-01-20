import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Гречка</title>
        {/* <meta name="description" key="description" content="" /> */}
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
