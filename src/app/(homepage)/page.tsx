import React from "react";
import { Metadata } from "next";
import Hero from "./components/hero";
import Empower from "./components/empower";
import Streamline from "./components/streamline";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <Hero />
      <Empower />
      <Streamline />
    </>
  );
};

export default Home;
