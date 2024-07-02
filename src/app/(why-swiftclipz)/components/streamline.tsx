import Bookmarks from "../../../app/constants/svgs/bookmarks";
import Refresh from "../../../app/constants/svgs/refresh";
import Next from "../../../app/constants/svgs/next";
import Card from "../../../app/components/card";

const Streamline = () => {
  return (
    <div className="space-y-20 py-4 px-8 xl:px-24">
      <h2 className="text-3xl font-bold text-center">
        Streamline Your Online Saves with Swiftclipz.
      </h2>
      <div className="flex flex-col gap-8 lg:flex-row">
        <Card
          icon={<Bookmarks />}
          title="Seamless Revisiting"
          description="Save and store essential texts, images, and links from the web, ensuring that your important discoveries are always within reach."
        />
        <Card
          icon={<Refresh />}
          title="Effortless Saving"
          description="Revisit your saved content, making it convenient to access and utilize your online discoveries whenever you need them."
        />
        <Card
          icon={<Next />}
          title="Hassle-free Sharing"
          description="Swiftclipz facilitates easy sharing, making collaboration and information exchange seamless for your peers and colleagues."
        />
      </div>
    </div>
  );
};

export default Streamline;
