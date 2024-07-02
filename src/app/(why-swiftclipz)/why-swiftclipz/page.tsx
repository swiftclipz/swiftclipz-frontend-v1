import { Metadata } from "next";
import ReadyToSimplify from "../components/ready-to-simplify";
import Streamline from "../components/streamline";
import GetStarted from "@/app/components/get-started";

export const metadata: Metadata = {
  title: "Simplify your online contents",
};

const Page = () => {
  return (
    <>
      <ReadyToSimplify />
      <Streamline />
      <GetStarted />
    </>
  );
};

export default Page;
