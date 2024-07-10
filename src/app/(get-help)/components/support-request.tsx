import React from "react";
import SupportForm from "./support-form";

const SupportRequest = () => {
  return (
    <div className="pt-20 pb-32">
      <div className="px-8 xl:px-24">
        <h1 className="text-3xl font-bold lg:text-5xl text-black font-lexend mb-4">
          Support Request
        </h1>
        <h3 className="text-2xl font-bold lg:text-3xl text-black mb-4">
          Submit Support Ticket
        </h3>
        <p className="text-customBlack00 text-lg lg:text-xl mb-10">
          Encountering an issue with Swiftclipz or need assistance? Our team is
          dedicated to resolving your concerns promptly. Submit a support
          ticket, and we&apos;ll address your query swiftly. Our goal is to
          respond to all requests within 24 hours, ensuring a seamless
          Swiftclipz experience for you.
        </p>
      </div>
      <SupportForm />
    </div>
  );
};

export default SupportRequest;
