import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Growing YouTube Channel 🎥",
    description: "Creating high-quality programming and tech content to help learners worldwide.",
  },
  {
    title: "Building a Blogging Website ✍️",
    description: "Developing a platform to share tech insights, coding tutorials, and cybersecurity knowledge.",
  },
  {
    title: "Helping Others in Tech 🤝",
    description: "Mentoring beginners, providing resources, and contributing to the tech community.",
  },
  {
    title: "Exploring New Tech Stacks 🚀",
    description: "Learning and implementing new frameworks and technologies to stay updated.",
  },
];

const WorkingProjects = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-20 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center text-purple-500 dark:text-purple-400 mb-6">
        Working Projects 🔥
      </h1>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        I'm actively working on multiple projects, including content creation, blogging, and helping others.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-xs bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-purple-500 dark:border-purple-400 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-purple-500 dark:text-purple-400">{project.title}</h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">{project.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WorkingProjects;
