"use client";
import React from "react";
import useInput from "react-lite-input";
import Dropdown from "../../../app/constants/svgs/dropdown";
import LabelInput from "../../../app/components/ui/input-label";
import CheckboxLabel from "../../../app/components/ui/checkbox-label";
import TextareaLabel from "../../../app/components/ui/textarea-label";

const SupportForm = () => {
  const initialValues = {
    name: "",
    email: "",
    description: "",
  };

  const { values, handleLiteChange } = useInput(initialValues);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const fullName = values.name;
    const email = values.email;
    const description = values.description;

    console.log(`${fullName} + ${email} + ${description}`);
  };

  return (
    <div className="sm:px-8 xl:px-24">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 bg-blue00 w-full py-16 px-7 xl:px-24 rounded-[50px]"
      >
        <div>
          <LabelInput
            id="name"
            name="name"
            type="text"
            label="What’s your full name"
            placeholder="e.g Michael Victor"
            value={values.name}
            onChange={handleLiteChange}
          />
        </div>

        <div>
          <LabelInput
            id="email"
            name="email"
            type="email"
            label="Email Address"
            placeholder="e.g radmakson@gmail.com"
            value={values.email}
            onChange={handleLiteChange}
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="font-lexend text-lg lg:text-xl block text-white mb-2"
          >
            Support Category
          </label>
          <div className="relative">
            <select
              name="category"
              id="category"
              className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium appearance-none"
            >
              <option value="">Technical Support</option>
              <option value="">Technical Support</option>
              <option value="">Technical Support</option>
              <option value="">Technical Support</option>
            </select>
            <div className="absolute top-[50%] -translate-y-[50%] right-4 flex items-center gap-2">
              <span className="block w-[1px] h-[38px] bg-[#BFBFBF]"></span>
              <Dropdown />
            </div>
          </div>
        </div>

        <div>
          <TextareaLabel
            id="description"
            label="Description of the Issue"
            name="description"
            placeholder="Your Message"
            rows={10}
            value={values.description}
            onChange={handleLiteChange}
          />
        </div>

        <div>
          <p className="font-lexend text-lg lg:text-xl block text-white mb-2">
            Priority
          </p>
          <div className="flex items-center gap-2 text-white">
            <CheckboxLabel label="Low" id="low" name="priority" />
            <CheckboxLabel label="Medium" id="medium" name="priority" />
            <CheckboxLabel label="High" id="high" name="priority" />
            <CheckboxLabel label="Urgent" id="urgent" name="priority" />
          </div>
        </div>

        <div className="flex flex-col justify-center isolate mt-10 w-max">
          <button className="link-button" type="submit">
            Submit Ticket
          </button>
        </div>
      </form>
    </div>
  );
};

export default SupportForm;
