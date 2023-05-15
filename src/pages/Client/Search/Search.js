/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import { get_categories } from "../../../redux/actions/categories/categories";
import { connect } from "react-redux";
import {search_article,
    search_article_page} from '../../../redux/actions/post/post'
import { Link, useParams } from "react-router-dom";
import ClientLayouts from "../../../Layouts/ClientLayouts/ClientLayouts";
import SEO from "../../../components/shared/SEO";
import MostPopular from "../../../components/shared/MostPopular";

function Search({
    posts,
    count,
    next,
    previous,
    search_blog,
}) {
  const params = useParams();
  const term = params.term;

  useEffect(() => {
    window.scrollTo(0, 0);
    search_article(term);
  }, []);

  return <>
  <SEO title={`Buscando ${term}`}/>
  <div className="bg-gray-50 py-6 pt-24">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className=" inline-block h-5 border-l-3 border-red-600 mr-2" />
                  Buscando: {term}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="flex-shrink max-w-full w-full sm:w-1/3 px-3 pb-3 pt-3 sm:pt-0 border-b-2 sm:border-b-0 border-dotted border-gray-100">
                  <div className="flex flex-row sm:block hover-img">
                    <Link to="">
                      <img
                        className="max-w-full w-full mx-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="alt title"
                      />
                    </Link>
                    <div className="py-0 sm:py-3 pl-3 sm:pl-0">
                      <h3 className="text-lg font-bold leading-tight mb-2">
                        <Link to="">
                          5 Tips to Save Money Booking Your Next Hotel Room
                        </Link>
                      </h3>
                      <p className="hidden md:block text-gray-600 leading-tight mb-1">
                        This is a wider card with supporting text below as a
                        natural lead-in to additional content.
                      </p>
                      <Link className="text-gray-500" to="">
                        <span className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                        Europe
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <MostPopular term={term} />
          </div>
        </div>
      </div>
  
  </>;
}

const mapStateToProps = (state) => ({
    posts: state.post.filtered_posts,
    count: state.post.count,
    next: state.post.next,
    previous: state.post.previous,
});

export default connect(mapStateToProps, {
  search_article,
})(Search);
