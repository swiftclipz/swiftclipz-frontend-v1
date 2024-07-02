import Image from "next/image";
import LinkButton from "../../../app/components/ui/link-button";
import images from "../../../app/constants/images";

const ReadyToSimplify = () => {
  return (
    <>
      <div className="flex flex-col justify-between gap-12 pt-20 px-8 lg:flex-row lg:items-center xl:px-24">
        <div className="space-y-8 font-lexend lg:max-w-[32rem]">
          <h1 className="text-3xl text-black font-bold lg:text-5xl">
            Ready to Simplify Your Online Experience?
          </h1>
          <p className="text-base text-[#202020] lg:text-xl">
            Swiftclipz user-friendly platform simplifies the process, ensuring
            that organizing and sharing your online discoveries becomes a
            hassle-free experience.
          </p>
          <div className="flex items-start">
            <LinkButton href="#" value="Get Started for Free" />
          </div>
        </div>
        <div className="w-full sm:w-[500px]">
          <Image src={images.simplicity.src} alt={images.simplicity.alt} />
        </div>
      </div>
     <div className="py-20">
         <hr className="w-full h-[2px] bg-black" />
     </div>
    </>
  );
};

export default ReadyToSimplify;
