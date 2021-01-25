import Link from "next/link";
import Header from "../components/Header";
import ProductsGrid from "../components/ProductsGrid";
import styles from "../styles/Home.module.css";

const Home = ({ grechka }) => {
  return (
    <>
      <Header />
      <main>
        <ProductsGrid productsList={grechka} />
        <Link href="/grechka">
          <a className={styles.More}>Больше гречки ➔</a>
        </Link>
      </main>
    </>
  );
};

export const getServerSideProps = async ({ res }) => ({
  props: { grechka: res.result },
});

export default Home;
