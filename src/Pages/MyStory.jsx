import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaYoutube, FaLinkedin, FaGithub, FaInstagram, FaTiktok } from "react-icons/fa";

const MyStory = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const storyData = [
    {
      title: "How It Started 💡",
      desc: "My journey began with a curiosity for coding. At first, I was just playing around with small projects, but soon I realized my passion for programming and cybersecurity. I started diving into books, tutorials, and coding challenges to enhance my skills.",
    },
    {
      title: "Learning & Growing 📚",
      desc: "Over the years, I explored multiple programming languages, completed my CEH certification, and built projects that enhanced my skills. Now, I’m on a mission to share this knowledge with others. I also started attending tech conferences and networking with industry professionals.",
    },
    {
      title: "Teaching & Helping Others 🤝",
      desc: "I started my YouTube channel to teach programming, cybersecurity, and web penetration testing. My goal is to make tech learning easy and practical for everyone. I believe that tech education should be accessible to everyone, regardless of background.",
    },
    {
      title: "Exploring New Horizons 🌍",
      desc: "I’m always looking for new challenges and opportunities. Recently, I’ve started learning about AI, machine learning, and blockchain technology. I’m excited to integrate these technologies into my projects and teach others how to use them in real-world applications.",
    },
    {
      title: "Contributing to Open Source 🌱",
      desc: "Open-source projects have always inspired me. I actively contribute to several GitHub repositories, sharing my knowledge with the global community. It’s fulfilling to help others and improve existing projects while continuously learning from others.",
    },
    {
      title: "Looking Ahead 🚀",
      desc: "Looking into the future, I plan to work on more advanced projects, improve my leadership skills, and continue spreading knowledge through my online channels. I’m committed to staying updated with the latest trends in cybersecurity, web development, and beyond.",
    }
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen p-10 flex flex-col items-center justify-center relative">
      <h2 className="text-4xl font-bold text-center mb-8">My Story 📖</h2>
      <p className="text-center text-gray-600 dark:text-gray-300 mb-10 max-w-2xl mx-auto">
        From coding as a hobby to teaching tech and cybersecurity, here’s my journey in the tech world. 🚀 Join me as I walk through the milestones that shaped my career and passion.
      </p>

      {/* Story Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-full max-w-5xl relative">
        {storyData.map((item, index) => (
          <motion.div
            key={index}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
            className={`relative p-6 bg-white dark:bg-gray-800 rounded-lg shadow-lg transition-all duration-300 cursor-pointer ${
              activeIndex !== null && activeIndex !== index ? "blur-sm" : "scale-105"
            }`}
          >
            <div className="relative z-10">
              <h3 className="text-xl font-semibold text-purple-600">{item.title}</h3>
              <p className="text-gray-500 mt-2">{item.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-16 bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg text-center">
        <h2 className="text-xl font-semibold text-purple-500 dark:text-purple-400">
          Let's Connect! 🌍
        </h2>
        <p className="text-gray-700 dark:text-gray-300 mb-4">
          Follow me on social media to stay updated with my projects, tutorials, and tech tips.
        </p>

        {/* Social Media Icons */}
        <div className="flex justify-center gap-6 text-purple-500 dark:text-purple-400 text-2xl">
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="hover:text-blue-600 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaTiktok className="hover:text-black dark:hover:text-white transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="hover:text-pink-500 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaYoutube className="hover:text-red-500 transition duration-300" />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <FaGithub className="hover:text-gray-700 dark:hover:text-gray-400 transition duration-300" />
          </a>
        </div>

        {/* GitHub Link */}
        <p className="mt-4 text-gray-700 dark:text-gray-300">
          This website code is freely available on{" "}
          <a
            href="#"
            className="text-purple-600 dark:text-purple-400 hover:text-purple-400 dark:hover:text-purple-300"
          >
            GitHub
          </a>
          . Feel free to explore the code, contribute, or download instructions for creating your own site.
        </p>
      </footer>
    </div>
  );
};

export default MyStory;
