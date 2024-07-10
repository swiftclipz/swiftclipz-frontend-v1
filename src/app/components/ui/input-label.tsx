import React from "react";
import { ChangeEvent } from "react";

interface LabelInputProps {
  id: string;
  name: string;
  required?: boolean;
  type: string;
  placeholder: string;
  value: any;
  label: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LabelInput = ({
  id,
  name,
  required,
  type,
  placeholder,
  value,
  label,
  onChange,
}: LabelInputProps) => {
  return (
    <>
      <label
        htmlFor={id}
        className="font-lexend text-lg lg:text-xl block text-white mb-2"
      >
        {label}
      </label>
      <input
        id={id}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium placeholder:text-[#BFBFBF] placeholder:text-lg placeholder:lg:text-xl"
      />
    </>
  );
};

export default LabelInput;
