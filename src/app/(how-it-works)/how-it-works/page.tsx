import React from "react";
import { Metadata } from "next";
import DiscoverSwiftclipz from "../components/discover-swiftclipz";
import Steps from "../components/steps";
import GetStarted from "@/app/components/get-started";

export const metadata: Metadata = {
    title: "Discover How Swiftclipz Works"
}

const Page = () => {
  return (
    <>
      <DiscoverSwiftclipz />
      <Steps />
      <GetStarted />
    </>
  );
};

export default Page;
