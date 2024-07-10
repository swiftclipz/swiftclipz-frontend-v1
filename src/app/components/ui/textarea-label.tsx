import React from "react";
import { ChangeEvent } from "react";

interface TextareaLabelProps {
  id: string;
  name: string;
  required?: boolean;
  placeholder: string;
  value?: string;
  rows: number;
  label: string;
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void;
}

const TextareaLabel = ({
  id,
  name,
  required,
  placeholder,
  rows,
  value,
  label,
  onChange,
}: TextareaLabelProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="font-lexend text-lg lg:text-xl block text-white mb-2"
      >
        {label}
      </label>
      <textarea
        name={name}
        required={required}
        id={id}
        placeholder={placeholder}
        rows={rows}
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium placeholder:text-[#BFBFBF] placeholder:text-lg placeholder:lg:text-xl resize-none"
      ></textarea>
    </>
  );
};

export default TextareaLabel;
