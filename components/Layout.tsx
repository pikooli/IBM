import React from "react";
import Head from "next/head";
import NavBar from "components/navbar/Navbar";

type Props = { children?: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>IBM</title>
        <meta name="description" content="IBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar />
      <div className="m-5 pb-3">{children}</div>
    </div>
  );
};

export default Layout;
