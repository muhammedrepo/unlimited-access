import styled from "styled-components";
import { Link } from "react-router-dom";

const BtnWrapper = styled(Link)`
  display: inline-flex;
  position: relative;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  outline: none;
  white-space: nowrap;
  margin: 5px;
  padding: 8px 22px;
  font-size: 0.875rem;
  line-height: 24px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1px;
  border: none;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  & {
    border-radius: 3px;
    box-shadow: inset 0 -3px 0 rgba(0, 0, 0, 0.15);

    transition: none;
  }

  &:hover {
    opacity: 0.9;
    transform: translateY(-1px);
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  }
`;

const Button = ({ type = "button", url, onClick, children, ...rest }) => {
  return (
    <BtnWrapper to={url} onClick={onClick} {...rest}>
      {children}
    </BtnWrapper>
  );
};

export default Button;
