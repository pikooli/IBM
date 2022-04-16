import type { NextPage } from "next";
import Layout from "components/Layout";
import Presentation from "components/text/Presentation";
import Role from "components/text/Role";
import Earth from "components/earth/Index";

const AboutMe: NextPage = () => {
  return (
    <Layout>
      <div className="mx-5">
        <h1 className="font-bold">About me</h1>
        <Role />
        <img
          src="https://www.pngitem.com/pimgs/m/80-805001_bongo-cat-game-hd-png-download.png"
          className="rounded"
          width={300}
          height={300}
          alt="cat"
        />
        <Presentation />
        <Earth />
      </div>
    </Layout>
  );
};

export default AboutMe;
