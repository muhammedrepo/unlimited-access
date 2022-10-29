import React from "react";
import { Layout, BreadCrumb } from "../../components";
import { Link, Element } from "react-scroll";
import { FaCaretRight, FaChevronUp } from "react-icons/fa";
import { BsCircle } from "react-icons/bs";
import { faqlinks } from "../../utils/data";
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

  ${
    "" /* .divider.divider-margin-lg {
    margin: 5rem auto;
  } */
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

const InfoFaq = () => {
  return (
    <Layout>
      <BreadCrumb
        title="faq"
        subtitle="All your Questions answered in one place.
"
        page="Frequently Asked Questions"
      />
      <Wrapper>
        <div className=" bg-white m-0 pt-8 pb-0 mb-5">
          <div className="px-4 mx-auto max-w-screen-xl">
            <div id="faqs" className="faqs">
              <div
                id="faqs-list"
                className="text-green-800 border-b border-black mb-3"
              >
                <h3>Some of your Questions:</h3>
              </div>

              <ul className="iconlist faqlist">
                {faqlinks.map((item) => {
                  const { id, link, title } = item;

                  return (
                    <li key={id} className="flex items-center">
                      <FaCaretRight />
                      <strong>
                        <Link to={link} spy={true} smooth={true}>
                          {title}
                        </Link>
                      </strong>
                    </li>
                  );
                })}
              </ul>
              <>
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
              </>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  );
};

export default InfoFaq;
