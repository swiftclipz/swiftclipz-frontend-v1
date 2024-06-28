import Link from "next/link";
import Image from "next/image";
import images from "../../constants/images";

const SiteLogo = () => {
  return (
    <Link href={"/"}>
      <Image src={images.siteLogo.src} alt={images.siteLogo.alt} width={"70"}/>
    </Link>
  );
};

export default SiteLogo;
