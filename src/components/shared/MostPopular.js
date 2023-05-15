import React from "react";
import { Link } from "react-router-dom";

export default function MostPopular(props) {
  const {term}= props
  return (
    <div className="flex-shrink max-w-full w-full lg:w-1/3 lg:pl-8 lg:pt-14 lg:pb-8 order-first lg:order-last">
      <div className="w-full bg-white">
        <div className="mb-6">
          <div className="p-4 bg-gray-100">
            <h2 className="text-lg font-bold text-black">Qué se está buscando</h2>
          </div>
          <ul className="post-number">
            <li className="border-b border-gray-100 hover:bg-gray-50">
              <Link
                className="text-lg font-bold px-6 py-3 flex flex-row items-center text-black"
                to="#"
              >
               {term}
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
