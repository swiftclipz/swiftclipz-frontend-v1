import { Metadata } from "next";
import ReadyToSimplify from "../components/ready-to-simplify";

export const metadata: Metadata = {
  title: "Simplify your online contents",
};

const Page = () => {
  return (
    <>
      <ReadyToSimplify />
    </>
  );
};

export default Page;
