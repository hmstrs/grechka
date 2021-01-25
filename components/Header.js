import { useState, useRef } from "react";
import Link from "next/link";
import styles from "../styles/Header.module.css";

const Header = ({ productsCount }) => {
  const [searchValue, setSearchValue] = useState("");
  const searchSubmit = useRef(null);

  return (
    <header className={styles.Header}>
      <Link href="/" prefetch>
        <h1 className={styles.Header__logo}>Гречка</h1>
      </Link>
      <h2 className={styles.Header__caption}>
        {productsCount ? (
          <>Мы нашли {productsCount} рез. по вашему запросу</>
        ) : (
          <>
            Введите название продукта <br />
            Мы поищем его в магазинах Киева
          </>
        )}
      </h2>
      <input
        id="search"
        type="search"
        inputMode="search"
        className={styles.Header__input}
        placeholder="Название продукта..."
        value={searchValue}
        onChange={({ target }) => setSearchValue(target.value)}
        onKeyDown={({ key }) => key == "Enter" && searchSubmit.current.click()}
      />
      {/* <Link href="/products/[name]" as={`/products/${searchValue}`}> */}
        <label htmlFor="search">
          <input
            disabled={!searchValue}
            ref={searchSubmit}
            type="submit"
            value="&#x1F50D;"
            className={styles.Header__search}
          />
        </label>
      {/* </Link> */}
    </header>
  );
};

export default Header;
