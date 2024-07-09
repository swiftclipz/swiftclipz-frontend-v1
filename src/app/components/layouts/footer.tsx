import React from "react";
import SiteLogo from "../logo/logo";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaDiscord } from "react-icons/fa6";
import Link from "next/link";

interface LinksProps {
  data: Array<{
    name: string;
    path: string;
  }>;
}

const Links = ({ data }: LinksProps) => {
  return (
    <nav className="flex flex-col gap-5">
      {data.map(({ name, path }, index) => (
        <span key={index} className="text-white">
          <Link href={path}>{name}</Link>
        </span>
      ))}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="full py-32 px-8 xl:px-24 bg-customBlack rounded-t-[50px]">
      <div className="max-w-[1450px] mx-auto flex flex-col gap-12 md:flex-row">
        <div className="flex-1 space-y-4 lg:space-y-10 md:basis-60">
          <div className="flex items-start">
            <SiteLogo />
          </div>
          <p className="text-white max-w-[23rem]">
            Your Simple Solution for Online Bookmarking and Clipping. Swiftclipz
            helps you store and manage your favorite content from the web.
          </p>
          <div className="text-white flex items-center gap-4">
            <a href="#">
              <FaGithub className="w-6 h-6" />
            </a>
            <a href="#">
              <FaXTwitter className="w-6 h-6" />
            </a>
            <a href="#">
              <FaDiscord className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="flex-1 space-y-5 md:p-[15px]">
          <h4 className="font-lexend text-3xl text-white font-bold">
            Resources
          </h4>
          <Links
            data={[
              { name: "Support", path: "#" },
              { name: "Blog", path: "#" },
              { name: "Feedback", path: "#" },
              { name: "Developers", path: "#" },
            ]}
          />
        </div>
        <div className="flex-1 space-y-5 md:p-[15px]">
          <h4 className="font-lexend text-3xl text-white font-bold">
            Useful Links
          </h4>
          <Links
            data={[
              { name: "Terms", path: "#" },
              { name: "Privacy Policy", path: "#" },
            ]}
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
