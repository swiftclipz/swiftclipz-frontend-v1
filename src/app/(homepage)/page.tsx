import React from "react";
import { Metadata } from "next";
import Hero from "./components/hero";
import Empower from "./components/empower";
import Streamline from "./components/streamline";
import GetStarted from "../components/get-started";

export const metadata: Metadata = {
  title: "Save And Organize Clips From Various Online Sources",
};

const Home = () => {
  return (
    <>
      <Hero />
      <Empower />
      <Streamline />
      <GetStarted />
    </>
  );
};

export default Home;
