import React from "react";
import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw`relative mb-2 font-semibold text-gray-800 bg-white`}
  & h5 {
    ${tw`text-2xl capitalize mb-0`}
  }

  & p,
  span {
    ${tw`font-normal text-gray-500 text-sm tracking-wide`}
  }
`;

const CardHeader = ({ title, subtitle, icon }) => {
  return (
    <Wrapper>
      <h5 className={icon ? "flex gap-x-2" : ""}>
        {icon}
        {title}
      </h5>
      <span>{subtitle}</span>
    </Wrapper>
  );
};

export default CardHeader;
