import React, { useState } from "react";
import { SingleQuestion } from ".";

import {
  facebookguide,
  instagramguide,
  snapchatguide,
  tiktokguide,
  twitterguide,
  whatsappguide,
} from "../../utils/data";

const Accordion = ({ name }) => {
  const [expandedIndex, setExpandedIndex] = useState(-1);

  const handleClick = (nextIndex) => {
    setExpandedIndex((currentExpandedIndex) => {
      if (currentExpandedIndex === nextIndex) {
        return -1;
      } else {
        return nextIndex;
      }
    });
  };

  let questions = instagramguide;
  if (name === "Facebook") {
    questions = facebookguide;
  } else if (name === "TikTok") {
    questions = tiktokguide;
  } else if (name === "Twitter") {
    questions = twitterguide;
  } else if (name === "Snapchat") {
    questions = snapchatguide;
  } else if (name === "WhatsApp") {
    questions = whatsappguide;
  }

  return (
    <>
      {questions.map((question, index) => {
        const isExpanded = index === expandedIndex;
        return (
          <SingleQuestion
            key={question.id}
            {...question}
            index={index}
            isExpanded={isExpanded}
            handleClick={handleClick}
          />
        );
      })}
    </>
  );
};

export default Accordion;
