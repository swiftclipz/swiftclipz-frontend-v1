import React from "react";
import Link from "next/link";
import "../../custom-styles.css";

interface LinkButtonProps {
  href: string;
  value: string;
}

const LinkButton = ({ href, value }: LinkButtonProps) => {
  return (
    <div className="flex flex-col justify-center isolate">
      <Link href={href}>
        <button className="link-button">{value}</button>
      </Link>
    </div>
  );
};

export default LinkButton;
