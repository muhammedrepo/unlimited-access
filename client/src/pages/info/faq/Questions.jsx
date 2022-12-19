import { Link } from "react-scroll";
import { FaCaretRight } from "react-icons/fa";
import { faqlinks } from "../../../utils/data";

const Questions = () => {
  return (
    <ul className="iconlist faqlist">
      {faqlinks.map((question) => {
        const { id, link, title } = question;

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
  );
};

export default Questions;
