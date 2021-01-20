import styles from "../styles/ProductsGrid.module.css"

const ProductsGrid = ({ productsList }) => {
  return (
    <div className={styles.Grid}>
      {productsList.map(
        ({ url, image, title, seller, price, weight, producer }) => (
          <a href={url} title={producer} className={styles.Card} key={title}>
            <img src={image} alt={title} className={styles.Card__img}/>
            <div className={styles.Card__content}>
              <div>
                <h3>{title}</h3>
                <i>{seller}</i>
              </div>
              <span>
                {(price / 100).toLocaleString("uk-UA", {
                  style: "currency",
                  currency: "UAH",
                })}
                {" / "}
                {weight}г.
              </span>
            </div>
          </a>
        )
      )}
    </div>
  );
};

export default ProductsGrid;
