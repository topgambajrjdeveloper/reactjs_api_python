import React from "react";
import { Link } from "react-router-dom";

export function PerfilCard({title, thumbnail,content,category}) {
  return (
    <div>
      <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
        <div className="flex flex-row sm:block hover-img">
          <Link to="/">
            <img
              className="max-w-full w-full mx-auto"
              src="http://via.placeholder.com/640x360"
              alt="alt title"
            />
          </Link>
          <div className="py-0 sm:py-3 pl-3 sm:pl-0">
            <h3 className="text-lg font-bold leading-tight mb-2">
              <Link to="#">
                5 Tips to Save Money Booking Your Next Hotel Room
              </Link>
            </h3>
            <p className="hidden md:block text-gray-600 leading-tight mb-1">
              This is a wider card with supporting text below as a natural
              lead-in to additional content.
            </p>
            <Link className="text-gray-500" to="#">
              <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
              Europe
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
