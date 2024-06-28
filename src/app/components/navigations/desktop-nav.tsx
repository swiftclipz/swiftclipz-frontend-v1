import React from "react";
import Link from "next/link";

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

export default DesktopNav;

const links = [
  { name: "Why Swiftclipz", path: "#" },
  { name: "Our Solution", path: "#" },
  { name: "How It Works", path: "#" },
  { name: "Get Help", path: "#" },
];
