"use client";
import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

interface FaqListProps {
  isActive: number | null;
  onToggle: (arg: number) => void;
}

const faq = [
  {
    question: "How do I create a Swiftclipz account?",
    answer:
      "To create a Swiftclipz account, simply navigate to the sign-up page on the Swiftclipz website. Provide the necessary details, such as your email address and a secure password. Once you've entered the required information, follow the prompts to verify your account and start using Swiftclipz features.",
  },
  {
    question: "What types of content can I save with Swiftclipz?",
    answer:
      "You can contact support by filling out the form on the support page.",
  },
  {
    question:
      "Is there a limit to the amount of content I can save on Swiftclipz?",
    answer:
      "You can request support by filling out the form on the support page.",
  },
  {
    question: "How do I save text content using Swiftclipz?",
    answer:
      "You can request support by filling out the form on the support page.",
  },
  {
    question: "How do I access my saved content on different devices?",
    answer:
      "You can request support by filling out the form on the support page.",
  },
  {
    question: "How do I share my saved content with others?",
    answer:
      "You can request support by filling out the form on the support page.",
  },
  {
    question: "How can I customize my Swiftclipz account settings?",
    answer:
      "You can request support by filling out the form on the support page.",
  },
];

const FaqList = ({ isActive, onToggle }: FaqListProps) => {
  return (
    <div className="font-lexend">
      {faq.map(({ question, answer }, index) => (
        <div className="py-5 border-b border-customBlack00" key={index}>
          <div
            className={`text-black text-lg md:text-xl font-lexend font-medium flex items-center justify-between gadiv-10 transition-all cursor-pointer`}
            onClick={() => onToggle(index)}
          >
            {question}{" "}
            <div className="min-w-5">
              {isActive === index ? <FaMinusSquare /> : <FaPlusSquare />}
            </div>
          </div>
          <p
            className={`overflow-hidden transition-all duration-300 pr-5 text-customBlack00 ${
              isActive === index ? "my-4 max-h-[200px]" : "max-h-0"
            }`}
          >
            {answer}
          </p>
        </div>
      ))}
    </div>
  );
};

const Faqs = () => {
  const [isActive, setIsActive] = useState<number | null>(null);

  const handleToggle = (id: number) => {
    setIsActive((active: number | null) => (active === id ? null : id));
  };

  return (
    <div className="px-8 xl:px-24 py-20">
      <div className="border border-black rounded-[50px] px-7 xl:px-12 py-12 shadow-[8px_8px_0_0_rgba(48,48,48)]">
        <FaqList onToggle={handleToggle} isActive={isActive} />
      </div>
    </div>
  );
};

export default Faqs;
