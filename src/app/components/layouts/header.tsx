"use client";
import { useState } from "react";
import SiteLogo from "../logo/logo";
import { MdMenu, MdClose } from "react-icons/md";
import DesktopNav from "../navigations/desktop-nav";
import MobileNav from "../navigations/mobile-nav";
import LinkButton from "../ui/link-button";

const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <header style={{ zIndex: 50 }} className="fixed w-full">
      <div className=" flex items-center justify-between bg-white py-4 px-8 xl:px-24">
        <SiteLogo />
        <div className="space-x-10 hidden md:block">
          <DesktopNav />
        </div>
        <div className="hidden md:block">
          <LinkButton href="#" value="Sign In" />
        </div>
        <div className="md:hidden">
          <MdMenu
            className="w-8 h-8 cursor-pointer"
            onClick={() => setOpenMenu(!openMenu)}
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
                <SiteLogo />
                <MdClose
                  className="w-8 h-8 cursor-pointer"
                  onClick={() => setOpenMenu(!openMenu)}
                />
              </div>
              <MobileNav />
              <LinkButton href="#" value="Sign In" />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;