import React from "react";
import Magnifier from "../../../app/constants/svgs/magnifier";
import Image from "next/image";
import images from "../../../app/constants/images";
import Settings from "../../../app/constants/svgs/settings";
import Pencil from "../../../app/constants/svgs/pencil";
import Version from "../../../app/constants/svgs/version";

const features = [
  {
    icon: <Magnifier />,
    heading: "Intuitive Search",
    text: "Swiftly search through your saved content with our intuitive search feature, finding exactly what you need in seconds.",
  },
  {
    icon: <Settings />,
    heading: "Customizable Expiration Options",
    text: "Utilize Swiftclipz customizable expiration options, enabling users to set their preferred time frames for the retention of saved content, including text, links, or images.",
  },
  {
    icon: <Pencil />,
    heading: "Editable Saved Text",
    text: "Effortlessly edit your already saved text with Swiftclipz intuitive editing feature, allowing users to make changes to their saved content quickly and easily within the platform.",
  },
  {
    icon: <Version />,
    heading: "Tailored Content Control",
    text: "Tailor your content control preferences in Swiftclipz user settings, deciding when saved text, links, or images should automatically disappear based on your specific requirements.",
  },
];

const FeatureList = () => {
  return (
    <div className="flex flex-col gap-8 font-lexend">
      {features.map(({ icon, heading, text }, index) => (
        <div key={index} className="flex flex-col gap-5 lg:flex-row">
          <span>{icon}</span>
          <div className="w-full space-y-3 lg:w-[32rem]">
            <h5 className="text-2xl font-medium">{heading}</h5>
            <p className="text-customBlack">{text}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

const SectionTwo = () => {
  return (
    <div className="flex flex-col justify-between gap-12 py-20 px-8 lg:flex-row lg:items-center xl:px-24">
      <div className=" lg:order-last">
        <FeatureList />
      </div>
      <div className="w-full sm:w-[500px]">
        <Image src={images.popular.src} alt={images.popular.alt} />
      </div>
    </div>
  );
};

export default SectionTwo;
