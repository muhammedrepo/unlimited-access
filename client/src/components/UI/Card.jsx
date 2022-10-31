import styled from "styled-components";
import tw from "twin.macro";
const Wrapper = styled.div`
  ${tw`p-4 bg-white rounded-lg border border-gray-200 shadow-md`}

  .card-header {
    padding: 30px;
    border-bottom: none;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
    position: relative;
    background-color: #fff;

    &.b-l-primary {
      border-left: 1px solid #24695c !important;
    }
    &.border-3 {
      border-width: 3px !important;
    }
  }
  .card-body {
    padding: 30px;
    background-color: transparent;
  }
`;

const Card = ({ children }) => {
  return <Wrapper>{children}</Wrapper>;
};

export default Card;
