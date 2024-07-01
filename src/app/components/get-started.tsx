import React from "react";
import LinkButton from "./ui/link-button";

const GetStarted = () => {
  return (
    <div className="py-28 px-8 xl:px-24">
      <div className="flex flex-col items-center gap-12 py-28 bg-white border-black border-[1px] rounded-3xl">
        <h3 className="text-3xl text-center font-lexend font-bold lg:text-4xl">
          Get Started with Swiftclipz Today!
        </h3>
        <LinkButton href="#" value="Try Them Out  for Free" />
      </div>
    </div>
  );
};

export default GetStarted;
