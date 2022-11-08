import styled from "styled-components";
import tw from "twin.macro";

const Wrapper = styled.div`
  ${tw``}

  .card-body {
    ${tw`p-7 bg-transparent flex-1`}
  }
`;

const Card = ({ children }) => {
  return (
    <Wrapper
      className={`p-4 rounded-lg bg-white   border border-gray-200 shadow-md`}
    >
      {children}
    </Wrapper>
  );
};

export default Card;
