import React, { useEffect } from "react";
import { connect } from "react-redux";
import { ToastContainer } from "react-toastify";

import { motion } from "framer-motion";
import Navbar from "../../components/navigation/Navbar";
import "react-toastify/dist/ReactToastify.css";

function ClientLayouts(props) {
  const { children } = props;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <motion.div
      initial={{ opacity: 0, transition: { duration: 0.5 } }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Navbar />
      <main data-scroll-section className="mx-auto pt-0 ">
        <ToastContainer position="bottom-center" autoClose={5000} />
        {children}
      </main>
    </motion.div>
  );
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps, {})(ClientLayouts);
