import React from "react";
import Link from "next/link";

const MobileNav = () => {
  return (
    <div>
      {links.map(({ name, path }, index) => (
        <Link
          key={index}
          href={path}
          className="text-sm font-lexend font-medium text-black active:text-customBlack block py-4 border-b border-gray-200"
        >
          {name}
        </Link>
      ))}
    </div>
  );
};

export default MobileNav;

const links = [
  { name: "Why Swiftclipz", path: "#" },
  { name: "Our Solution", path: "#" },
  { name: "How It Works", path: "#" },
  { name: "Get Help", path: "#" },
];
