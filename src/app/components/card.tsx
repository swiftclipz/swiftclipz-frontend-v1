import React, { ReactNode } from "react";
import "../custom-styles.css";

interface CardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const Card = ({ icon, title, description }: CardProps) => {
  return (
    <div className="card w-full pr-2 pb-2 isolate">
      <div className="h-full space-y-6 py-11 px-7 rounded-lg  border-l-[1px] border-t-[1px] border-[#303030] bg-white">
        {icon}
        <h3 className="text-2xl font-bold">{title}</h3>
        <p className="text-base text-customBlack00">{description}</p>
      </div>
    </div>
  );
};

export default Card;
