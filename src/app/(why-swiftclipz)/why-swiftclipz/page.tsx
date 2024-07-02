import { Metadata } from "next";
import ReadyToSimplify from "../components/ready-to-simplify";
import Streamline from "../components/streamline";

export const metadata: Metadata = {
  title: "Simplify your online contents",
};

const Page = () => {
  return (
    <>
      <ReadyToSimplify />
      <Streamline />
    </>
  );
};

export default Page;
