"use client";
import { useRouter } from "next/navigation"; // Use 'next/navigation'
import { coachDetails } from "@/db/coachdb";
import Image from "next/image";

const Coach = () => {
  const router = useRouter();

  const handleCoachClick = (name) => {
    const coachNameSlug = name.toLowerCase().replace(/\s+/g, "-"); // Convert name to slug
    router.push(`/coaches/${coachNameSlug}`); // Navigate to the respective coach's page
  };

  return (
    <div className="coachgrid">
      {coachDetails.map((coach) => (
        <div key={coach.id} onClick={() => handleCoachClick(coach.name)}>
          <Image
            src={coach.image}
            alt={coach.name}
            className="img-fluid block margin-auto"
          />
          <h3 className="name rocket text-blue text-center">{coach.name}</h3>
          <p className="paragraph text-black text-center mt-1">
            {coach.specialization}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Coach;
