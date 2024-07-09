import React from "react";

const Steps = () => {
  return (
    <div className="font-lexend px-8 xl:px-24">
      {/* <!-- Item #1 --> */}
      <div className="relative pl-8 sm:pl-32 py-12 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-lg sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-base font-semibold w-20 h-10 mb-3 sm:mb-0 text-black bg-white rounded-lg">
            Step 1
          </div>
          <div className="text-xl text-black font-bold">
            Create Your Account
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-customBlack">
          Begin your Swiftclipz journey by creating a personalized account. Sign
          up to access a suite of innovative tools designed to simplify your
          online content organization experience.
        </div>
      </div>

      {/* <!-- Item #2 --> */}
      <div className="relative pl-8 sm:pl-32 py-12 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-lg sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-base font-semibold w-20 h-10 mb-3 sm:mb-0 text-black bg-white rounded-lg">
            Step 2
          </div>
          <div className="text-xl text-black font-bold">
            Saving Your Discoveries
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-customBlack">
          Preserve important text, links, and images from various online
          sources. Copy and paste text, utilize the "Save" button for links, and
          upload images seamlessly into your Swiftclipz repository.
        </div>
      </div>

      {/* <!-- Item #3 --> */}
      <div className="relative pl-8 sm:pl-32 py-12 group">
        <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-slate-300 sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-black after:border-4 after:box-content after:border-slate-50 after:rounded-lg sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
          <div className="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-base font-semibold w-20 h-10 mb-3 sm:mb-0 text-black bg-white rounded-lg">
            Step 3
          </div>
          <div className="text-xl text-black font-bold">
            Access and Share Anywhere
          </div>
        </div>
        {/* <!-- Content --> */}
        <div className="text-customBlack">
          Easily manage your saved content on both desktop and mobile devices.
          Access additional options by hovering over items on desktop or tapping
          and holding for mobile, allowing for convenient sharing, editing, and
          customization across all your devices.
        </div>
      </div>
    </div>
  );
};

export default Steps;
