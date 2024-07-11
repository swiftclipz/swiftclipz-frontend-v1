import Card from "../../components/card";
import React from "react";
import Diskette from "../../constants/svgs/diskette";
import Sort from "../../constants/svgs/sort";
import Share from "../../constants/svgs/share";

const Streamline = () => {
  return (
    <div className="font-lexend space-y-16 py-4 px-8 xl:px-24">
      <h2 className="text-3xl font-bold lg:w-2/6">
        Streamline Your Online Saves with Swiftclipz.
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Card
          icon={<Diskette />}
          title="Save with Ease"
          description="Clip text, images, and links from the web seamlessly and store them in your personalized space with just a few clicks."
        />
        <Card
          icon={<Sort />}
          title="Neatly Sort Your Clips"
          description="Easily arrange your saved clips for quick retrieval and a clutter-free experience, ensuring that your online resources are always within reach."
        />
        <Card
          icon={<Share />}
          title="Share with Simplicity"
          description="Easily arrange your saved clips for quick retrieval and a clutter-free experience, ensuring that your online resources are always within reach."
        />
      </div>
    </div>
  );
};

export default Streamline;
