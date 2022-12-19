import React from "react";
import { FaMedal } from "react-icons/fa";
import { Card, CardHeader } from "../../components/UI";

const LeaderBoard = () => {
  return (
    <Card>
      <CardHeader
        icon=<FaMedal className="text-skin-fill" />
        title="Earnings Leaderboard"
      />

      <div class="overflow-x-auto relative">
        <table class="w-full text-sm text-left text-gray-500">
          <thead class="text-xs text-gray-900 uppercase">
            <tr>
              <th scope="col" class="py-3 px-6">
                #
              </th>
              <th scope="col" class="py-3 px-6">
                Username
              </th>
              <th scope="col" class="py-3 px-6">
                Earnings
              </th>
            </tr>
          </thead>
          <tbody>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                1
              </th>
              <td class="py-4 px-6">KING7727</td>
              <td class="py-4 px-6">$1,499,559</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                2
              </th>
              <td class="py-4 px-6">GHOST3647</td>
              <td class="py-4 px-6">$1,164,946</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                3
              </th>
              <td class="py-4 px-6">CX123456</td>
              <td class="py-4 px-6">$1,021,864</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                4
              </th>
              <td class="py-4 px-6">GHOST3647</td>
              <td class="py-4 px-6">$1,164,946</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                5
              </th>
              <td class="py-4 px-6">GHOST3647</td>
              <td class="py-4 px-6">$1,164,946</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                6
              </th>
              <td class="py-4 px-6">GHOST3647</td>
              <td class="py-4 px-6">$1,164,946</td>
            </tr>
            <tr class="bg-white dark:bg-gray-800">
              <th
                scope="row"
                class="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                7
              </th>
              <td class="py-4 px-6">GHOST3647</td>
              <td class="py-4 px-6">$1,164,946</td>
            </tr>
          </tbody>
        </table>
      </div>
    </Card>
  );
};

export default LeaderBoard;
