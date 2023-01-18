import { FaEye } from "react-icons/fa";
import Button from "../../components/Button";

const ProcessingTable = ({ openModal }) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-skin-muted ">
        <thead className="text-xs text-gray-700 uppercase border-b-2 border-green-900 ">
          <tr>
            <th scope="col" className="py-3 px-6">
              Due Date
            </th>
            <th scope="col" className="py-3 px-6">
              Amount
            </th>
            <th scope="col" className="py-3 px-6">
              Status
            </th>
            <th scope="col" className="py-3 px-6">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="bg-white">
            <th
              scope="row"
              className="py-2 px-6 font-medium text-gray-900 whitespace-nowrap"
            >
              20-11-10
            </th>
            <td className="py-2 px-6">$2404</td>
            <td className="py-2 px-6">
              <span className="bg-skin-button-yellow px-1 rounded-sm">
                Processing...
              </span>
            </td>
            <td className="py-2 px-6">
              <Button btnDark onClick={openModal}>
                <FaEye />
              </Button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProcessingTable;
