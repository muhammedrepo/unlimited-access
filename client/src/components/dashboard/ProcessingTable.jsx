import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import Button from "../Button";

const ProcessingTable = () => {
  return (
    <div class="overflow-x-auto relative">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" class="py-3 px-6">
              Due Date
            </th>
            <th scope="col" class="py-3 px-6">
              Amount
            </th>
            <th scope="col" class="py-3 px-6">
              Status
            </th>
            <th scope="col" class="py-3 px-6">
              View Details
            </th>
          </tr>
        </thead>
        <tbody>
          <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
            <th
              scope="row"
              class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              20-11-10
            </th>
            <td class="py-4 px-6">$2404</td>
            <td class="py-4 px-6">Processing</td>
            <td class="py-4 px-6">
              <Button icon=<FaEye /> bgColor="green" onClick={() => {}} />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default ProcessingTable;
