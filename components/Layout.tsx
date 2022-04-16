import React from "react";
import Head from "next/head";

type Props = { children?: React.ReactNode };

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <Head>
        <title>IBM</title>
        <meta name="description" content="IBM" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </div>
  );
};

export default Layout;
