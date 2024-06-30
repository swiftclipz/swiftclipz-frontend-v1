import Image from "next/image";
import images from "../../constants/images";
import LinkButton from "../ui/link-button";

const Hero = () => {
  return (
    <div className="flex flex-col justify-between gap-12 pt-20 px-4 lg:flex-row lg:items-center xl:px-24">
      <div className="space-y-8 font-lexend lg:max-w-[32rem]">
        <h1 className="text-3xl text-black font-bold lg:text-5xl">
          Seamlessly Save and Share Your Online Discoveries
        </h1>
        <p className="text-base text-[#202020] lg:text-xl">
          With our intuitive platform, you can easily clip and store essential
          texts, images, and links from the web. Enjoy seamless revisiting and
          sharing of your favorite discoveries.
        </p>
        <div>
          <LinkButton href="#" value="Get Started for Free" />
        </div>
      </div>
      <div className="w-full sm:w-[500px]">
        <Image src={images.heroImage.src} alt={images.heroImage.alt} />
      </div>
    </div>
  );
};

export default Hero;
