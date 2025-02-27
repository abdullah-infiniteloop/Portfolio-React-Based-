import React, { useState } from "react";
import { motion } from "framer-motion";

const Journey = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const journeyData = [
    {
      year: "2019 - 2020",
      title: "Started Programming",
      desc: "Began with C++ and problem-solving. Built a strong logic base, understanding algorithms, and data structures. 💻 Developed small projects to enhance coding skills."
    },
    {
      year: "2021 - Present",
      title: "Full Stack Development",
      desc: "Dived into frontend and backend. Learned React, Node.js, and databases. Created multiple projects, including eCommerce and management systems. 🚀"
    },
    {
      year: "2023 - Present",
      title: "Cybersecurity & Web Pentesting",
      desc: "Started learning ethical hacking, SQL Injection, XSS, and securing applications. Focused on penetration testing and network security. 🛡️"
    },
    {
      year: "2024 - Present",
      title: "IT at Superior University",
      desc: "Currently studying Information Technology. Exploring networking, system security, and administration. Enhancing my understanding of enterprise-level IT solutions. 🎓"
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center justify-center p-10 relative">
      <h2 className="text-4xl font-bold text-center mb-8">My Journey 🚀</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl relative">
        {journeyData.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
              activeIndex !== null && activeIndex !== index ? "blur-sm" : "scale-105"
            }`}
          >
            <div className="relative z-10">
              <p className="text-2xl font-extrabold text-purple-600">0{index + 1}</p>
              <h3 className="text-xl font-semibold">{item.title}</h3>
              <p className="text-gray-500">{item.year}</p>
              <p className="text-gray-700 dark:text-gray-300 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Journey;
