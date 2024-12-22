import Breadcrumbs from "@/components/breadcrumbs/Breadcrumbs";
import coaches from "@/assets/coache.png";
import srilanka from "@/assets/srilanka.png";
import players from "@/assets/players.png";
import messageblue from "@/assets/messageblue.png";
import message from "@/assets/messageicon.png";
import CoachTestimonial from "@/UI/slider/CoachTestimonial";
import Coach from "@/components/coach/Coach";


import CoachSlider from "@/UI/slider/CoachSlider";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Button from "@/UI/redbutton/Button";
const CoachComponent = () => {
  const router = useRouter();
  const breadcrumbs = [{ label: "Home", href: "/" }, { label: "Coaches" }];
  const [selectedCoach, setSelectedCoach] = useState({
    id: 1,
    name: "Raji Sharma",
    specialization: "Batting Coach",
    image: {
      src: "/_next/static/media/slider1.2cf223ef.png",
      height: 445,
      width: 345,
      blurDataURL:
        "/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fslider1.2cf223ef.png&w=6&q=70",
      blurWidth: 6,
      blurHeight: 8,
    },
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
  });
  const handleCoachSelect = (coach) => {
    setSelectedCoach(coach);
  };
  console.log(selectedCoach);
  const handleCoachClick = (name) => {
    const coachNameSlug = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to slug
    router.push(`/coaches/${coachNameSlug}`); // Navigate to the respective coach's page
  };