// Team Component
"use client";
import { motion } from "framer-motion";
import React, { useState } from "react";
import { teamDetails } from "@/db/teamDetails";
import Image from "next/image";
import batting from "@/assets/batting.png";
import bowler from "@/assets/bowler.png";
import allrounder from "@/assets/allrounder.png";

const Team = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = [
    { id: 1, name: "All", image: allrounder },
    { id: 2, name: "Batters", image: batting },
    { id: 3, name: "Bowlers", image: bowler },
    { id: 4, name: "All Rounder", image: allrounder },
  ];

  const filteredTeam =
    selectedCategory === "All"
      ? teamDetails
      : teamDetails.filter((player) => player.category === selectedCategory);
  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };
  return (
    <div>
      {/* Navigation Tabs */}
      <div className="nav-tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.name)}
            className={
              selectedCategory === category.name ? "actives teambtn" : "teambtn"
            }
          >
            <div className="navimg">
              <Image
                src={category.image}
                alt={category.name}
                className="category-icon"
              />
            </div>
            <div className="counterText text-center text-black">
              {category.name}
            </div>
          </button>
        ))}
      </div>

      {/* Team Members Display */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={fadeIn}
      >
        <div className="inner-margin">
          <div className="team-grid">
            {filteredTeam.map((player) => (
              <div key={player.id} className="team-member">
                <Image
                  src={player.image}
                  alt={player.name}
                  className="img-fluid block margin-auto"
                />
                <h3 className="name rocket text-blue text-center">
                  {player.name}
                </h3>
                <p className="paragraph text-black text-center mt-1">
                  {player.talent.join(", ")}
                </p>
              </div>
            ))}
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Team;
