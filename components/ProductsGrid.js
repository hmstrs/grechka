import styles from "../styles/ProductsGrid.module.css";

const ProductsGrid = ({ productsList }) => {
  return (
    <div className={styles.Grid}>
      {productsList
        .sort(
          (a, b) =>
            a.price * (1000 / (a.weight ? a.weight : 1000)) -
            b.price * (1000 / (b.weight ? b.weight : 1000))
        )
        .map(({ web_url, img, title, price, weight, producer }) => (
          <a
            href={web_url}
            title={producer.trademark}
            className={styles.Card}
            key={title}
          >
            <img
              src={img["s200x200"]}
              alt={title}
              className={styles.Card__img}
            />
            <div className={styles.Card__content}>
              <div>
                <h3>{title}</h3>
                <i>{producer.trademark}</i>
              </div>
              <span>
                {(price / 100).toLocaleString("uk-UA", {
                  style: "currency",
                  currency: "UAH",
                })}
                {" / "}
                {weight == 0 ? `1к` : weight}г.
              </span>
            </div>
          </a>
        ))}
    </div>
  );
};

export default ProductsGrid;
