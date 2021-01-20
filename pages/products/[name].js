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

export const getServerSideProps = async ({ res }) =>
  // Mock for now, later would be parsed data from fastify
  ({
    props: {
      products: [
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №1",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №2",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №3",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №4",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №5",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №6",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №7",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
        {
          url:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          image:
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTO80aB6zvGWy7t9aFp7J0DF87a1KzuJXHY7caJ6u332JaYpanYAbAMt1VdCu1yz2qwD_3H6FgpJw&usqp=CAc",
          title: "Мука №8",
          seller: "Мегамаркет",
          price: 10290,
          weight: 2000,
          producer: "Хуторок",
        },
      ],
    },
  });

export default Products;
