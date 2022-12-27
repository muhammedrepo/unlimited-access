import { FaEye } from "react-icons/fa";
import Button from "../../components/Button";

const ProcessingTable = ({ openInvoiceModal }) => {
  return (
    <div className="overflow-x-auto relative">
      <table className="w-full text-sm text-left text-skin-muted ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 ">
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
          <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              20-11-10
            </th>
            <td className="py-4 px-6">$2404</td>
            <td className="py-4 px-6">
              <span className="bg-skin-button-yellow px-1 rounded-sm">
                Processing...
              </span>
            </td>
            <td className="py-4 px-6">
              <Button
                className="bg-skin-green-dark text-skin-base"
                onClick={openInvoiceModal}
              >
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
