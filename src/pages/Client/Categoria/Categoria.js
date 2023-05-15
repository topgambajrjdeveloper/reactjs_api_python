/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable react/jsx-no-comment-textnodes */
import React, { useEffect } from "react";
import { connect } from "react-redux";
import MostPopular from "../../../components/shared/MostPopular";
import { get_categories } from "../../../redux/actions/categories/categories";
import {
  get_article_list_category,
  get_article_list_category_page,
} from "../../../redux/actions/post/post";
import { Link, useParams } from "react-router-dom";
import SEO from "../../../components/shared/SEO";
import { CategoriesHeader } from "../../../components/post";

function Categoria({
  get_categories,
  categories,
  get_article_list_category,
  get_article_list_category_page,
  posts,
  count,
  next,
  previous,
}) {
  const params = useParams();
  const slug = params.slug;
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
    get_article_list_category(slug);
  }, []);

  return (
    <div>
      <SEO title={`Categoría - ${slug.toLowerCase()}`} />
      <CategoriesHeader categories={categories} />
      {/* block news */}
      <div className="bg-gray-50 py-6 pt-24">
        <div className="xl:container mx-auto px-3 sm:px-4 xl:px-2">
          <div className="flex flex-row flex-wrap">
            {/* Left */}
            <div className="flex-shrink max-w-full w-full lg:w-2/3  overflow-hidden">
              <div className="w-full py-3">
                <h2 className="text-gray-800 text-2xl font-bold">
                  <span className=" inline-block h-5 border-l-3 border-red-600 mr-2" />
                  Categorias: {slug}
                </h2>
              </div>
              <div className="flex flex-row flex-wrap -mx-3">
                <div className="flex-shrink max-w-full w-full px-3 pb-5">
                  <div className="relative hover-img max-h-98 overflow-hidden">
                    {/*thumbnail*/}
                    <Link to="#">
                      <img
                        className="max-w-full w-full mx-auto h-auto"
                        src="http://via.placeholder.com/640x360"
                        alt="Image description"
                      />
                    </Link>
                    <div className="absolute px-5 pt-8 pb-5 bottom-0 w-full bg-gradient-cover">
                      {/*title*/}
                      <Link to="">
                        <h2 className="text-3xl font-bold capitalize text-white mb-3">
                          Amazon Shoppers Are Ditching Designer Belts for This
                          Best-Selling
                        </h2>
                      </Link>
                      <p className="text-gray-100 hidden sm:inline-block">
                        Russia says a fire on its flagship vessel in the Black
                        Sea detonated munitions - Ukraine says it fired missiles
                        at the Moskva
                      </p>
                      {/* author and date */}
                      <div className="pt-2">
                        <div className="text-gray-100">
                          <div className="inline-block h-3 border-l-2 border-red-600 mr-2" />
                          Europe
                        </div>
                      </div>
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
            <MostPopular />
          </div>
        </div>
      </div>
    </div>
  );
}
const mapStateToProps = (state) => ({
  categories: state.categories.categories,
  posts: state.post.blog_list_category,
  count: state.post.count,
  next: state.post.next,
  previous: state.post.previous,
});

export default connect(mapStateToProps, {
  get_categories,
  get_article_list_category,
  get_article_list_category_page,
})(Categoria);
