import React from "react";
import { FaMedal } from "react-icons/fa";
import { Card, CardHeader } from "../../components/UI";

const LeaderBoard = () => {
  const config = [{ label: "#" }, { label: "Username" }, { label: "Earnings" }];

  const data = [
    { id: 1, username: "KING7727", earnings: "1,499,559" },
    { id: 2, username: "JAME2233", earnings: "1,123,12" },
    { id: 3, username: "CALI3322", earnings: "1,78,559" },
    { id: 4, username: "MIND454", earnings: "1,111,559" },
    { id: 5, username: "CINDI123", earnings: "1,098,559" },
    { id: 6, username: "JACK222", earnings: "1,499,223" },
    { id: 7, username: "PIOI4895", earnings: "1,298,559" },
    { id: 8, username: "SDFSD999", earnings: "1,988,559" },
    { id: 9, username: "SSD098", earnings: "1,109,559" },
    { id: 10, username: "FSFSD12", earnings: "1,499,087" },
  ];

  const renderedHeader = config.map((column) => (
    <th key={column.label} scope="col" className="py-3 px-6">
      {column.label}
    </th>
  ));

  const renderedRow = data.map((rowData) => {
    return (
      <tr key={rowData.id} className="bg-white dark:bg-gray-800">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {rowData.id}
        </th>
        <td className="py-4 px-6">{rowData.username}</td>
        <td className="py-4 px-6">${rowData.earnings}</td>
      </tr>
    );
  });
  return (
    <Card>
      <CardHeader
        icon=<FaMedal className="text-skin-fill" />
        title="Earnings Leaderboard"
      />

      <div className="overflow-x-auto relative">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-900 uppercase">
            <tr>{renderedHeader}</tr>
          </thead>
          <tbody>{renderedRow}</tbody>
        </table>
      </div>
    </Card>
  );
};

export default LeaderBoard;
