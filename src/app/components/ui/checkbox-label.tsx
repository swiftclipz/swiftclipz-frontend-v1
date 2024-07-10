import React from "react";
import { ChangeEvent } from "react";

interface CheckboxLabelProps {
  id: string;
  name: string;
  required?: boolean;
  label: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const CheckboxLabel = ({
  id,
  name,
  required,
  label,
  onChange,
}: CheckboxLabelProps) => {
  return (
    <label htmlFor={id} className="flex items-center gap-2">
      <input
        required={required}
        type="checkbox"
        name={name}
        id={id}
        onChange={onChange}
        className="w-5 h-5"
      />
      {label}    </label>
  );
};

export default CheckboxLabel;
