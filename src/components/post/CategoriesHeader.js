/* eslint-disable jsx-a11y/no-redundant-roles */
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Input } from "semantic-ui-react";

export function CategoriesHeader({ categories }) {
  const location = useLocation();
  const navigate = useNavigate();

  // SEARCH
  const [term, setTerm] = useState("");
  const handleChange = (e) => {
    setTerm(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => navigate(`/search/${term}`), 0.2);
    setTerm("");
  };
  return (
    <div className="w-full bg-gray-100 py-3 pt-3 items-center">
      <div className="grid grid-cols-12">
        <div className="col-span-8 ">
          <div className="space-x-10 px-6">
            <div className="relative">
              <div className="relative -mb-6 w-full overflow-x-auto pb-3 pt-3">
                <ul role="list" className="mx-4 inline-flex space-x-6 sm:mx-6 ">
                  <Link
                    to="/"
                    className={`${
                      location.pathname === "/"
                        ? "text-orange-500 bg-white"
                        : "text-gray-900 hover:text-orange-500 border border-gray-100 hover:border-gray-200"
                    } py-2 px-6 rounded-md text-lg font-regular items-center`}
                  >
                    Todas
                  </Link>
                  
                  {categories?.map((category, index) => (
                      <Link
                        key={index}
                        to={`/categoria/${category.slug}`}
                        as={`/categoria/${category.slug}`}
                        className={`${
                          location.pathname === `/categoria/${category.slug}`
                            ? "text-orange-500 bg-white"
                            : "text-gray-900 border border-gray-100 hover:border-gray-200"
                        } py-2 px-6 rounded-md text-lg font-regular`}
                      >
                        {category.name}
                      </Link>
                    ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <form
          onSubmit={(e) => onSubmit(e)}
          className="relative col-span-4 mr-8"
        >
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
            <i className="bx bx-search-alt text-xl text-gray-800"></i>
          </div>
          <Input
            id="search"
            name="search"
            value={term}
            onChange={(e) => handleChange(e)}
            type="search"
            className={`
              py-2.5 pl-10 pr-3 
              block w-full rounded-md
              border border-gray-200
              focus:border-gray-200 focus:ring-gray-200
              focus:outline-none focus:ring-1
              placeholder-gray-600 focus:placeholder-gray-500
          `}
          ></Input>
        </form>
      </div>
    </div>
  );
}
