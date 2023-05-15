/* eslint-disable jsx-a11y/no-redundant-roles */
import React from "react";
import { Link } from "react-router-dom";

export default function CarouselXItemsCard({ dummyNews, onMarkerHover }) {
  return (
    <>
      <div className="-mt-5 slider bg-grey-50 ">
        <div className="">
          <div className="w-full py-3 pt-3 items-center">
            <div className="grid grid-cols-12 md:grid-cols-6 xs:grid-cols-3">
              <div className="col-span-12 ">
                <div className="space-x-10 px-6">
                  <div className="relative">
                    <div className="relative mb-4 w-full overflow-x-auto pb-3 pt-3">
                      <ul
                        role="list"
                        className="mx-4 inline-flex space-x-6 sm:mx-6"
                      >
                        {dummyNews.map(({ id, title, image }) => (
                          <li
                            key={id}
                            onMouseEnter={onMarkerHover}
                            onMouseLeave={onMarkerHover}
                            className="inline-flex w-64 flex-col text-center lg:w-auto card "
                          >
                            <div className="group relative bg-gray-100 my-8">
                              <div className="overflow-hidden rounded-md w-full items-center">
                                <img
                                  src={image}
                                  alt={title}
                                  title={title}
                                  className="object-cover object-center group-hover:opacity-75"
                                />
                              </div>
                              <div className="mt-6">
                                <h3 className="mt-1 md:font-semibold text-gray-900">
                                  <Link to="/">
                                    <span className="absolute inset-0" />
                                    {title.substring(0, 50)}[...]
                                  </Link>
                                </h3>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
