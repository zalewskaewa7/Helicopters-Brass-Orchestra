import React from 'react';
import { motion } from "framer-motion";
import "./css/home.css";


function mainTitle() {
  return (
    <motion.h1  className="title"   initial={{ opacity: 0, scale: 0.5 }}
    animate={{opacity: 1, scale: 1}}
    transition={{ duration: 1.5 }}>
      HELICOPTERS BRASS ORCHESTRA
    </motion.h1>
  )
}

export default mainTitle
