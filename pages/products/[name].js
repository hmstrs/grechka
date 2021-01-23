import Header from "../../components/Header";
import ProductsGrid from "../../components/ProductsGrid";

const Products = ({ products }) => {
  return (
    <>
      <Header productsCount={products.length} />
      <main>
        <ProductsGrid productsList={products} />
      </main>
    </>
  );
};

export const getServerSideProps = async ({ res }) => ({
  props: { products: res.result ?? [] },
});

export default Products;
