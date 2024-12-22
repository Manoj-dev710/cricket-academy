"use client";
import Button from "@/UI/redbutton/Button";
import React, { useState } from "react";

const CoachParagraph = ({ para, btn }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Function to toggle expanded state
  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  // Split paragraph into words and truncate if necessary
  const words = para.split(" ");
  const shouldTruncate = words.length > 100;
  const truncatedText = shouldTruncate
    ? words.slice(0, 100).join(" ") + "..."
    : para;

  return (
    <div>
      <p
        className="paragraph text-gray full-text-justify mt-2"
        style={{ marginBottom: "2rem" }}
        dangerouslySetInnerHTML={{
          __html: isExpanded || !shouldTruncate ? para : truncatedText,
        }}
      ></p>
      {btn && shouldTruncate && (
        <Button
          onClick={toggleReadMore}
          className="text-blue mt-2 underline block"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </Button>
      )}
    </div>
  );
};

export default CoachParagraph;
