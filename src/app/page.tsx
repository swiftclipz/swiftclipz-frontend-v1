import React from "react";
import { Metadata } from "next";
import Hero from "./components/homepage/hero";

export const metadata: Metadata = {
  title: "Home",
};

const Home = () => {
  return (
    <>
      <Hero />
    </>
  );
};

export default Home;
