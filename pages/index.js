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

export const getStaticProps = async ({ res }) =>
  // Mock for now, later would be parsed data from fastify
  ({
    props: {
      grechka: [
        {
          url:
            "https://epicentrk.ua/ua/shop/krupa-grechnevaya-khutorok-yadritsya-800-g-4820211661410.html",
          image: "https://cdn.27.ua/499/61/c2/2712002_1.jpeg",
          title: "Гречка №1",
          seller: "Ашан",
          price: 3990,
          weight: 1000,
          producer: "Хуторок",
        },
        {
          url:
            "https://epicentrk.ua/ua/shop/krupa-grechnevaya-khutorok-yadritsya-800-g-4820211661410.html",
          image: "https://cdn.27.ua/499/61/c2/2712002_1.jpeg",
          title: "Гречка №2",
          seller: "Ашан",
          price: 3990,
          weight: 1000,
          producer: "Хуторок",
        },
        {
          url:
            "https://epicentrk.ua/ua/shop/krupa-grechnevaya-khutorok-yadritsya-800-g-4820211661410.html",
          image: "https://cdn.27.ua/499/61/c2/2712002_1.jpeg",
          title: "Гречка №3",
          seller: "Ашан",
          price: 3990,
          weight: 1000,
          producer: "Хуторок",
        },
        {
          url:
            "https://epicentrk.ua/ua/shop/krupa-grechnevaya-khutorok-yadritsya-800-g-4820211661410.html",
          image: "https://cdn.27.ua/499/61/c2/2712002_1.jpeg",
          title: "Гречка №4",
          seller: "Ашан",
          price: 3990,
          weight: 1000,
          producer: "Хуторок",
        },
      ],
    },
    revalidate: 60,
  });

export default Home;
