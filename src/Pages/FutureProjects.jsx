import React from "react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Expanding Social Media Presence 📢",
    description: "Building a large network across multiple platforms to reach a wider audience.",
  },
  {
    title: "Tech Industry Meetups 🎤",
    description: "Participating in and hosting meetups to connect with professionals and learn new trends.",
  },
  {
    title: "Helping Others in Tech 🤝",
    description: "Providing guidance, mentorship, and resources to those starting in tech.",
  },
  {
    title: "Deep Dive into Web Security 🔒",
    description: "Exploring penetration testing and ethical hacking to improve cybersecurity skills.",
  },
];

const FutureProjects = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white px-6 py-20 transition-colors duration-300">
      <h1 className="text-4xl font-bold text-center text-purple-600 dark:text-purple-400 mb-6">
        Future Projects 🚀
      </h1>
      <p className="text-center text-gray-700 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        My vision is to create a strong network online and offline, help others in tech, and gain deeper knowledge.
      </p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="relative w-full max-w-xs bg-white dark:bg-gray-800 p-5 rounded-2xl shadow-lg border border-purple-300 dark:border-purple-500 cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h2 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
              {project.title}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mt-2">
              {project.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default FutureProjects;
