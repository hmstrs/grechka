import { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

const Home = ({ grechka }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchSumbit = useRef(null);

  return (
    <>
      <header className={styles.Header}>
        <span className={styles.Header__logo}>Гречка</span>
        <h1 className={styles.Header__caption}>
          Введите название продукта <br />
          Мы поищем его в магазинах Киева
        </h1>
        <input
          type="search"
          inputmode="search"
          className={styles.Header__input}
          placeholder="Название продукта..."
          value={searchValue}
          onChange={({ target }) => setSearchValue(target.value)}
          onKeyDown={({ key }) =>
            key == "Enter" && searchSumbit.current.click()
          }
        />
        <Link href="/products/[name]" as={`/products/${searchValue}`}>
          <a>
            <input
              disabled={!searchValue}
              ref={searchSumbit}
              type="submit"
              value="&#x1F50D;"
              className={styles.Header__search}
            />
          </a>
        </Link>
      </header>
      <main className={styles.Main}>
        <div className={styles.Main__grid}>
          {grechka.map(
            ({ url, image, title, seller, price, weight, producer }) => (
              <a href={url} title={producer} className="Card">
                <img src={image} />
                <div>
                  <div>
                  <h3>{title}</h3>
                  <i>{seller}</i>
                  </div>
                  <span>
                    {(price / 100).toLocaleString("uk-UA", {
                      style: "currency",
                      currency: "UAH",
                    })}{" / "}
                    {weight}г.
                  </span>
                </div>
              </a>
            )
          )}
        </div>
        <Link href="/grechka">
          <a className={styles.Main__more}>Больше гречки ➔</a>
        </Link>
      </main>
    </>
  );
};

Home.getInitialProps = ({ res }) => {
  // Mock for now, later would be parsed data from fastify
  return {
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
        title: "Гречка №4",
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
  };
};

export default Home;
