import { Metadata } from "next";
import SectionOne from "../components/section-one";
import SectionTwo from "../components/section-two";
import GetStarted from "@/app/components/get-started";

export const metadata: Metadata = {
  title: "Our Solutions",
};

const Page = () => {
  return (
    <div>
      <SectionOne />
      <SectionTwo />
      <GetStarted />
    </div>
  );
};

export default Page;
