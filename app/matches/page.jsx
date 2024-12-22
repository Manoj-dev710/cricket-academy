import banner from "@/assets/banner/contactbanner.png";
import bannermob from "@/assets/banner/contactbannermob.png";
import Banner from "@/components/banner/Banner";
import Match from "./match/Match";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";

const page = () => {
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Matches" }];

  return (
    <>
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Get in Touch with Our Cricket Experts"
      />
      {/* match  */}
      <div className="container">
        <Breadcrumbs paths={breadcrumbs} />
      </div>
      <Match />
    </>
  );
};

export default page;
