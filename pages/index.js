const Index = ({ fromFastify }) => <div>{fromFastify}</div>;

Index.getInitialProps = ({ res }) => {
  return {
    fromFastify: res.test,
  };
};

export default Index;
