import type { NextPage } from "next";
import Layout from "components/Layout";
import Grid from "components/grid";

const Home: NextPage = () => {
  return (
    <Layout>
      <Grid size={100} />
    </Layout>
  );
};

export default Home;
