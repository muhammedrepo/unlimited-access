import styled from "styled-components";
import tw from "twin.macro";
import { SingleQuestion } from ".";

import {
  facebookguide,
  instagramguide,
  snapchatguide,
  tiktokguide,
  twitterguide,
  whatsappguide,
} from "../../utils/data";

const Wrapper = styled.div`
  .button {
    ${tw`flex items-center justify-between w-full p-4 font-medium text-left
    focus:ring-2 focus:ring-blue-200 
`}
  }
`;

const Accordion = ({ name }) => {
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
    <Wrapper>
      {questions.map((question) => {
        return <SingleQuestion key={question.id} {...question} />;
      })}
    </Wrapper>
  );
};

export default Accordion;
