/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/no-redundant-roles */
/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SEO from "../../../components/shared/SEO";
import { CategoriesHeader } from "../../../components/post";
import MapArticle from "../../../components/post/MapArticle/MapArticle";
import { get_categories } from "../../../redux/actions/categories/categories";
// import CardListCarrousel from "../../../components/post/cardListCarrousel/CardListCarrousel";
// import { HerobigGrid } from "../../../components/post/hero/HerobigGrid";
// import { Pagination } from "../../../components/shared/Pagination";

function Home({categories, get_categories}) {
  // const [categories, setCategories] = useState(CategoriesLink);
  console.log('categories',categories);
  useEffect(() => {
    window.scrollTo(0, 0);
    get_categories();
  }, []);
  return (
    <>
      <SEO title="Inicio" />
      <CategoriesHeader categories={categories&&categories} />
      <div className="col-span-1">
        <MapArticle />
      </div>
    </>
  );
}

const mapStateToProps = (state) => ({
  categories:state.categories.categories
});

export default connect(mapStateToProps, {
  get_categories,
})(Home);
