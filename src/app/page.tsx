import React from "react";
import { Metadata } from "next";
import Hero from "./components/homepage/hero";
import Empower from "./components/homepage/empower";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <Hero />
      <Empower />
    </>
  );
};

export default Home;
