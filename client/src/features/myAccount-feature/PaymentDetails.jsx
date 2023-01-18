import React from "react";
import { FaInfoCircle, FaPaypal } from "react-icons/fa";
import { Card } from "../../components/UI";

const PaymentDetails = ({ paymentMethod, detail }) => {
  return (
    <div className="h-8">
      <Card>
        <div className="overflow-x-auto relative">
          <table className="w-full text-sm text-left text-gray-500">
            <thead className="text-xs text-green-600 uppercase bg-white">
              <tr>
                <th scope="col" className="py-3 px-6 rounded-l-lg">
                  <FaInfoCircle />
                </th>
                <th scope="col" className="py-3 px-6">
                  Method
                </th>
                <th scope="col" className="py-3 px-6 rounded-r-lg">
                  Payment Details
                </th>
              </tr>
            </thead>

            <tbody className="border-t-2 border-black">
              <tr className="bg-white">
                <th
                  scope="row"
                  className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap"
                >
                  <FaPaypal className="text-blue-500" />
                </th>
                <td className="py-4 px-6">{paymentMethod}</td>
                <td className="py-4 px-6">{detail}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </Card>
    </div>
  );
};

export default PaymentDetails;
