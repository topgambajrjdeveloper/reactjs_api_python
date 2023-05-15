import React from "react";
import { connect } from "react-redux"
import {motion} from 'framer-motion'

 function AdminLayouts(props) {
  const { children } = props;
  return (
    <motion.div
    initial={{opacity: 0, transition: {duration: 0.5}}}
    animate={{opacity: 1}}
    exit={{opacity: 0, transition: {duration: 0.5}}}
    >
      <h1>AdminLayouts</h1>
      {children}
      </motion.div>
  );
}
const mapStateToProps = state =>({

})

export default connect(mapStateToProps,{

}) (AdminLayouts)