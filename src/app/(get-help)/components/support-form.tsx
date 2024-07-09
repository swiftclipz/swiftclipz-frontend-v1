import React from "react";
import dropdown from "@/app/assets/svgs/dropdown.svg";
import Image from "next/image";

const SupportForm = () => {
  return (
    <form className="bg-blue00 w-full py-16 px-7 xl:px-24 grid gap-6 rounded-[50px]">
      <div>
        <label
          htmlFor="name"
          className="font-lexend text-lg lg:text-xl block text-white mb-2"
        >
          What’s your full name
        </label>
        <input
          type="text"
          name="name"
          id="name"
          placeholder="e.g Michael Victor"
          className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium placeholder:text-[#BFBFBF] placeholder:text-lg placeholder:lg:text-xl"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="font-lexend text-lg lg:text-xl block text-white mb-2"
        >
          Email Address
        </label>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="e.g radmakson@gmail.com"
          className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium placeholder:text-[#BFBFBF] placeholder:text-lg placeholder:lg:text-xl"
        />
      </div>

      <div>
        <label
          htmlFor="name"
          className="font-lexend text-lg lg:text-xl block text-white mb-2"
        >
          What’s your full name
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
            <Image src={dropdown} alt="dropdown" />
          </div>
        </div>
      </div>

      <div>
        <label
          htmlFor="name"
          className="font-lexend text-lg lg:text-xl block text-white mb-2"
        >
          Description of the Issue
        </label>
        <textarea
          name="description"
          id="description"
          placeholder="Your message"
          rows={10}
          className="w-full p-4 bg-white border border-gray-300 rounded-lg outline-none text-customBlack00 font-medium placeholder:text-[#BFBFBF] placeholder:text-lg placeholder:lg:text-xl resize-none"
        ></textarea>
      </div>

      <div>
        <p className="font-lexend text-lg lg:text-xl block text-white mb-2">
          Priority
        </p>
        <div className="flex items-center gap-2 text-white">
          <label htmlFor="low" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              value={"low"}
              id="low"
              className="w-5 h-5"
            />
            Low
          </label>
          <label htmlFor="medium" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              value={"medium"}
              id="medium"
              className="w-5 h-5"
            />
            Medium
          </label>
          <label htmlFor="high" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              value={"high"}
              id="high"
              className="w-5 h-5"
            />
            High
          </label>
          <label htmlFor="urgent" className="flex items-center gap-2">
            <input
              type="checkbox"
              name="priority"
              value={"urgent"}
              id="urgent"
              className="w-5 h-5"
            />
            Urgent
          </label>
        </div>
      </div>

      <div className="flex flex-col justify-center isolate mt-10 w-max">
        <button className="link-button">Submit Ticket</button>
      </div>
    </form>
  );
};

export default SupportForm;
