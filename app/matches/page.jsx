import banner from "@/assets/banner/contactbanner.png";
import bannermob from "@/assets/banner/contactbannermob.png";
import Banner from "@/components/banner/Banner";
import Match from "./match/Match";

const page = () => {
  return (
    <>
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Get in Touch with Our Cricket Experts"
      />
      {/* match  */}
      <Match/>
    </>
  );
};

export default page;
