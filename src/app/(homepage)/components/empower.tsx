import React from "react";
import Image from "next/image";
import images from "../../constants/images";

const Empower = () => {
  return (
    <div className="py-20">
      <div className="py-14 px-8 bg-blue00 rounded-[2rem] xl:px-24">
        <div className="flex flex-col justify-between gap-12 lg:flex-row lg:items-center order-first lg:order-last">
          <div className="space-y-8 font-lexend lg:max-w-[32rem]">
            <h1 className="text-3xl text-white font-bold lg:text-5xl">
              Empower Your Online Journey with Swiftclipz Innovation.
            </h1>
            <p className="text-base text-white lg:text-xl">
              Effortlessly save and organize your online discoveries. Swiftclipz
              enables you to seamlessly clip, store, and share your findings,
              simplifying and enriching your entire online experience.
            </p>
            <div></div>
          </div>
          <div className="w-full sm:w-[500px] order-last lg:order-first">
            <Image src={images.empowerment.src} alt={images.empowerment.alt} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Empower;
