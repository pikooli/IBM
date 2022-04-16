import type { NextPage } from "next";
import Layout from "components/Layout";
import Grid from "components/grid";

const NotFound: NextPage = () => {
  return (
    <Layout>
      <h1 className="w-100 text-5xl font-bold text-center">404</h1>
    </Layout>
  );
};

export default NotFound;
