import { notFound } from "next/navigation";
import { coachDetails } from "@/db/coachdb";
import Image from "next/image";
import Banner from "@/components/banner/Banner";
import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
// IMAGES
import banner from "@/assets/banner/testimonialBanner.png";
import bannermob from "@/assets/banner/teambannermob.png";
import CoachParagraph from "./Component/CoachParagraph";

export const metadata = {
  title: "Coaches",
  description: "Coaches Details",
};
export default async function CoachDetail({ params }) {
  const { name } = await params; // Await params implicitly handled by async function
  // Find the coach based on the slugified name
  const coach = coachDetails.find(
    (coach) => coach.name.toLowerCase().replace(/\s+/g, "-") === name
  );
  if (!coach) {
    notFound(); // Show the default "Page Not Found" if coach is not found
  }
  const breadcrumbs = [
    { label: "Home", href: "/" },
    { label: "Coaches", href: "/coaches" },
    {
      label: coach.name,
    },
  ];

  return (
    <>
      {/* Banner */}
      <Banner
        banner={banner}
        mobilebanner={bannermob}
        text="Transformative Coaching for Your Best Self"
      />
      {/* Coach Detail */}
      <section className="section_top">
        <div className="container">
          <Breadcrumbs paths={breadcrumbs} />

          <div className="grid-2-to-2  gap5 align_center">
            <div className="desktopview">
              <Image
                src={coach.image}
                alt={coach.name}
                className="img-fluid block margin-auto"
              />
            </div>
            <div>
              <h1 className="title text-blue rocket lg-text-center">
                {coach.name}
              </h1>
              <h2 className="middletext text-red lg-text-center mt-2">
                Specialization: {coach.specialization}
              </h2>
              <div className="mobileview mt-2">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  className="img-fluid block margin-auto"
                />
              </div>
              <CoachParagraph para={coach.para} btn={true} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
