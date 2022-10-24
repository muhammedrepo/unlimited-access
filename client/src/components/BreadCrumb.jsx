import React from "react";
import { Link } from "react-router-dom";

const BreadCrumb = ({ title, subtitle, page }) => {
  return (
    <section className="relative py-16 px-0 border-b border-[#eee] bg-green-700 text-center">
      <div className="mx-auto max-w-screen-xl px-4">
        <h1 className="text-white mb-0 uppercase">{title}</h1>
        <span className="text-white mt-0">{subtitle}</span>
        <nav className="flex items-center justify-center">
          <ol className="inline-flex items-center space-x-1 md:space-x-3">
            <li className="inline-flex items-center">
              <Link
                to="/"
                className="inline-flex items-center text-sm font-medium text-gray-300 hover:text-gray-400 "
              >
                <svg
                  className="w-4 h-4 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                Home
              </Link>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-200"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill-rule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                <span className="ml-1 text-sm font-medium text-gray-100 md:ml-2 ">
                  {page}
                </span>
              </div>
            </li>
          </ol>
        </nav>
      </div>
    </section>
  );
};

export default BreadCrumb;
