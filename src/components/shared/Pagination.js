import React from "react";
import { Link } from "react-router-dom";

export function Pagination({count,
  next,
  previous}) {
  return (
    <>
      <nav aria-label="Page navigation">
        <ul className="flex justify-center space-x-0">
          <li>
            <Link
              className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-l bg-gray-700 dark:bg-gray-700 text-gray-100"
              to="#"
              aria-label="Previous"
            >
              <span aria-hidden="true">«</span>
            </Link>
          </li>
          
          <li>
            <Link
              className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
              to="#"
            >
              1
            </Link>
          </li>
          <li>
            <Link
              className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
              to="#"
            >
              2
            </Link>
          </li>
          <li>
            <Link
              className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5"
              to="#"
            >
              3
            </Link>
          </li>
          <li>
            <Link
              className="block relative py-3 px-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:text-gray-100 hover:bg-gray-700 dark:hover:bg-gray-700 -mr-0.5 rounded-r"
              to="#"
              aria-label="Next"
            >
              <span aria-hidden="true">»</span>
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
