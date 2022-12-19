import { Link, Element } from "react-scroll";

import { BsCircle } from "react-icons/bs";
import { FaChevronUp } from "react-icons/fa";
import { faqlinks } from "../../../utils/data";
import styled from "styled-components";

const Wrapper = styled.div`
  .divider {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-align: center;
    align-items: center;
    overflow: hidden;
    margin: 3rem auto;
    color: #e5e5e5;
    width: 100%;
  }

  .divider svg,
  .divider a {
    position: relative;
    -ms-flex: 0 0 auto;
    flex: 0 0 auto;
    width: 24px;
    max-width: 100%;
    line-height: 1;
    font-size: 18px !important;
    text-align: center;
  }

  .divider::after {
    margin-left: 0.5rem;
  }

  .divider::after,
  .divider::before {
    content: "";
    -ms-flex-preferred-size: 0;
    flex-basis: 0;
    -ms-flex-positive: 1;
    flex-grow: 1;
    max-width: 100%;
    height: 1px;
    background-color: #eee;
  }
  .divider-right {
    svg {
      color: green;
    }
  }

  .divider.divider-right::before {
    display: block;
  }

  .divider.divider-right::after {
    display: none;
  }
`;

const Answers = () => {
  return (
    <Wrapper>
      {faqlinks.map((answer) => {
        const { title, content, id, link } = answer;

        return (
          <div key={id}>
            <div className="divider">
              <BsCircle />
            </div>
            <h3>
              <Element name={link}>
                <strong>Q.</strong> {title}
              </Element>
            </h3>
            <div dangerouslySetInnerHTML={{ __html: content }} />

            <div className="divider divider-right">
              <Link to={link} spy={true} smooth={true}>
                <FaChevronUp />
              </Link>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
};

export default Answers;
