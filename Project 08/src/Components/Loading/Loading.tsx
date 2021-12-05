import React from "react";
import styles from "./Loading.module.css";
import { motion } from "framer-motion";

function Loading() {
  return (
    <div className={styles.Box}>
      <motion.span
        animate={{ x: -20, y: -20 }}
        transition={{ yoyo: Infinity, duration: 0.3 }}
        id="top"
      />
      <motion.span
        animate={{ x: 20, y: -20 }}
        transition={{ yoyo: Infinity, duration: 0.3 }}
        id="right"
      />
      <motion.span
        animate={{ x: -20, y: 20 }}
        transition={{ yoyo: Infinity, duration: 0.3 }}
        id="left"
      />
      <motion.span
        animate={{ x: 20, y: 20 }}
        transition={{ yoyo: Infinity, duration: 0.3 }}
        id="bottom"
      />
    </div>
  );
}

export default Loading;
