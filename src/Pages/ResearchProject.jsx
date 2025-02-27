import React from "react";
import { motion } from "framer-motion";

const ResearchProject = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-center"
      >
        <h1 className="text-4xl font-bold mb-4">🚧 Under Construction 🚧</h1>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          This page is currently being built. Stay tuned! 🚀
        </p>
      </motion.div>
    </div>
  );
};

export default ResearchProject;
