import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import { Card } from "../../UI";
import { FaShareSquare, FaThumbsUp } from "react-icons/fa";
import { Link } from "react-router-dom";
import { approvedPost } from "../../../utils/data";

const SocialPostAccordion = () => {
  return (
    <Accordion allowZeroExpanded>
      {approvedPost.map((item) => {
        const { icon, name, id, bgColor } = item;

        return (
          <div className="mt-6">
            <Card>
              <AccordionItem key={id}>
                <AccordionItemHeading>
                  <AccordionItemButton>
                    <h5 className="p-0 text-xl font-bold text-gray-800">
                      <button className="flex items-center gap-x-2">
                        <span
                          className="text-4xl mr-4"
                          style={{ color: bgColor }}
                        >
                          {icon}
                        </span>
                        {name}
                      </button>
                    </h5>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <Card>
                    <ul>
                      <li className="flex">
                        <div
                          className="text-5xl mr-4 font-medium"
                          style={{ color: bgColor }}
                        >
                          {icon}
                        </div>
                        <div>
                          <Link
                            to="https://www.instagram.com/reel/CYl6G4IqVHc/"
                            className="font-bold inline-flex items-center gap-x-2 text-sm text-green-600"
                            target="_blank"
                          >
                            <FaShareSquare /> Tap Here To View
                          </Link>
                          <p className="font-bold text-xs flex gap-x-2 text-gray-400">
                            Status
                            <span
                              className="inline-flex
                    text-white font-semibold mr-2 px-2.5 py-0.5 rounded"
                              style={{ backgroundColor: bgColor }}
                            >
                              <FaThumbsUp /> Approved
                            </span>
                          </p>
                        </div>
                      </li>
                    </ul>
                  </Card>
                </AccordionItemPanel>
              </AccordionItem>
            </Card>
          </div>
        );
      })}
    </Accordion>
  );
};

export default SocialPostAccordion;
