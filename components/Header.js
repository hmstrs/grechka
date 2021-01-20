import { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = ({ productsCount }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchSumbit = useRef(null);

  return (
    <header className={styles.Header}>
      <Link href="/">
        <span className={styles.Header__logo}>Гречка</span>
      </Link>
      <h1 className={styles.Header__caption}>
        {productsCount ? (
          <>Ми нашлы {productsCount} рез. по вашему запросу</>
        ) : (
          <>
            Введите название продукта <br />
            Мы поищем его в магазинах Киева
          </>
        )}
      </h1>
      <input
        type="search"
        inputMode="search"
        className={styles.Header__input}
        placeholder="Название продукта..."
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyDown={({ key }) => key == "Enter" && searchSumbit.current.click()}
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
  );
};

export default Header;
