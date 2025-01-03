import Banner from "@/components/banner/Banner";
// IMAGES
import banner from "@/assets/banner/aboutbanner.png";
import bannermob from "@/assets/banner/aboutbannermob.png";
import About from "./component/About";
export const metadata = {
  title: "About",
  description: "Generated by create next app",
};
const page = () => {
  return (
    <>
      {/* BANNER */}
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Elite Cricket Training for 
Future Champions"
      />
      <About />
      
    </>
  );
};

export default page;
