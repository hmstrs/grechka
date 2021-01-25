import Chart from "../components/Chart";
import ProductsGrid from "../components/ProductsGrid";
import styles from "../styles/Header.module.css";
import Link from "next/link";

const Grechka = ({ grechkaPrices, grechka }) => {
  return (
    <>
      <Link href="/">
        <h1 className={styles.Header__logoGrechka}>Гречка</h1>
      </Link>
      <main>
        <Chart productPrices={grechkaPrices} />
        <ProductsGrid productsList={grechka} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ res }) =>
  ({
    props: {
      grechka: res.result.data ?? [],
      grechkaPrices: res.result.statistics.map(entry => ({
        price: entry.price / 100,
        date: new Date(entry.time).toLocaleDateString(),
      })) ?? [],
    },
  });

export default Grechka;
