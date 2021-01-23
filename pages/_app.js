import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Гречка</title>
        <meta
          name="description"
          key="description"
          content="Поиск и сравнение цен в супермаркетах Киева"
        />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
