import React, { ReactNode } from "react";
import DoubleCheck from "../../constants/svgs/double-check";
import images from "../../../app/constants/images";
import Image from "next/image";

interface FeatureListProps {
  icon: ReactNode;
  text: string;
}

const FeatureList = ({ icon, text }: FeatureListProps) => {
  return (
    <div className="w-full font-lexend rounded-[10px] bg-white">
      <div className="w-full flex flex-col gap-2 p-4">
        <span>{icon}</span>
        <span className="text-base">{text}</span>
      </div>
    </div>
  );
};

const SectionOne = () => {
  return (
    <div className="space-y-20 py-20 px-8 xl:px-24">
      <h2 className="text-3xl font-bold text-center">
        Powerfully Customized Solutions for Everyone
      </h2>
      <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center">
        <div className="space-y-8">
          <div className="flex gap-12">
            <FeatureList icon={<DoubleCheck />} text="Easy Clipping" />
            <FeatureList icon={<DoubleCheck />} text="Seamless Storing" />
          </div>
          <div className="flex gap-12">
            <FeatureList icon={<DoubleCheck />} text="Hassle-free Organizing" />
            <FeatureList icon={<DoubleCheck />} text="Effortless Sharing" />
          </div>
        </div>
        <div className="w-full sm:w-[500px]">
          <Image src={images.diversity.src} alt={images.diversity.alt} />
        </div>
      </div>
    </div>
  );
};

export default SectionOne;
