"use client";
import { useState } from "react";
import SiteLogo from "../logo/logo";
import { MdMenu, MdClose } from "react-icons/md";
import LinkButton from "../ui/link-button";
import Link from "next/link";

interface MobileNavProps {
  onClick: () => void;
}

const links = [
  { name: "Why Swiftclipz", path: "/why-swiftclipz" },
  { name: "Our Solution", path: "/our-solutions" },
  { name: "How It Works", path: "/how-it-works" },
  { name: "Get Help", path: "/get-help" },
];

const DesktopNav = () => {
  return (
    <>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className="text-sm font-lexend font-medium text-black active:text-customBlack"
        >
          {name}
        </Link>
      ))}
    </>
  );
};

const MobileNav = ({ onClick }: MobileNavProps) => {
  return (
    <div>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className="text-sm font-lexend font-medium text-black active:text-customBlack block py-4 border-b border-gray-200"
          onClick={onClick}
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <header style={{ zIndex: 50 }} className="fixed w-full bg-white">
      <div className="max-w-[1450px] mx-auto flex items-center justify-between py-4 px-8 xl:px-24">
        <SiteLogo />
        <div className="space-x-10 hidden md:block">
          <DesktopNav />
        </div>
        <div className="hidden md:block">
          <LinkButton href="#" value="Sign In" />
        </div>
        <div className="md:hidden">
          <MdMenu
            className="w-8 h-8 cursor-pointer text-customBlack"
            onClick={handleCloseMenu}
          />
        </div>

        <div
          className={`w-full h-full top-0 left-0 bg-gray-400 fixed transform origin-left transition-transform duration-500 ease-in-out ${
            openMenu ? "translate-x-0" : "-translate-x-full"
          } md:hidden`}
          style={{ zIndex: 100 }}
        >
          <div className="w-11/12 h-full bg-white px-6 py-6 flex flex-col justify-between">
            <div className="flex flex-col gap-8">
              <div className="flex justify-between">
                <div onClick={handleCloseMenu}>
                  <SiteLogo />
                </div>
                <MdClose
                  className="w-8 h-8 cursor-pointer text-customBlack"
                  onClick={handleCloseMenu}
                />
              </div>
              <MobileNav onClick={handleCloseMenu} />
              <div className="flex items-start">
                <LinkButton href="#" value="Sign In" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
