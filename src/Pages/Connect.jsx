import React from "react";
import { useNavigate } from "react-router-dom";
import Contact from "./Contact.jsx";

import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTiktok,
  FaBlog,
} from "react-icons/fa";

const Connect = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-start pt-20 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-300 px-4 sm:px-6 md:px-12 overflow-y-auto">
      {/* Hero Section */}
      <section className="flex flex-col items-center text-center w-full max-w-3xl space-y-6">
        <h1 className="text-3xl sm:text-5xl font-bold text-purple-600 dark:text-purple-400">
          Let's Collaborate & Build Together!
        </h1>
        <p className="text-lg sm:text-xl max-w-2xl text-gray-700 dark:text-gray-300">
          Whether you're a brand, developer, or creator, let's connect and
          create something amazing.
        </p>
        <button
          className="mt-6 bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 dark:hover:bg-purple-500 transition-transform transform hover:scale-105 shadow-md"
          onClick={() => navigate("/contact")}
        >
          Get in Touch
        </button>
      </section>

      {/* About Section */}
      <section className="container mx-auto px-6 md:px-12 py-16 mt-10 ">
        <h2 className="text-2xl text-center sm:text-4xl font-bold text-purple-600 dark:text-purple-400">
          Who Am I?
        </h2>
        <p className="mt-4 text-center max-w-3xl mx-auto text-gray-700 dark:text-gray-300">
          I'm a{" "}
          <span className="font-semibold text-purple-600 dark:text-purple-400">
            YouTuber, Web Developer, and Content Creator
          </span>{" "}
          passionate about building digital experiences and collaborating on
          innovative projects.
        </p>
      </section>

      {/* Why Collaborate Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6 md:px-12 w-full mt-10  cursor-pointer">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-purple-600">
          Why work with me?
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            "Full-Stack Developer",
            "IT Administrator",
            "Ethical Hacking & Security",
            "Content Creator & Educator",
            "Problem-Solving Mindset",
            "Passion for Technology",
          ].map((title, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg text-center shadow-md transform transition-transform hover:scale-110"
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {
                  [
                    "Experienced in building scalable applications.",
                    "Managing IT infrastructure efficiently.",
                    "Learning cybersecurity to protect assets.",
                    "Teaching & sharing knowledge via YouTube.",
                    "Finding smart & efficient solutions.",
                    "Always learning new tech.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collaboration Section */}
      <section className="bg-gray-100 dark:bg-gray-800 py-12 px-6 md:px-12 w-full mt-10  cursor-pointer">
        <h2 className="text-2xl sm:text-4xl font-bold text-center text-purple-600">
          Let's Collaborate!
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {[
            "Website Development",
            "Web Hosting & Server Reviews",
            "Digital Products & SaaS Reviews",
            "Cybersecurity & Ethical Hacking",
            "UI/UX & Website Optimization",
            "Content & Tech Sponsorships",
          ].map((title, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-700 rounded-lg text-center shadow-md transform transition-transform hover:scale-110"
            >
              <h3 className="text-xl font-semibold text-purple-600 dark:text-purple-400">
                {title}
              </h3>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                {
                  [
                    "Build modern websites & apps.",
                    "Testing hosting providers & cloud services.",
                    "Analyzing web-based tools & SaaS.",
                    "Educating on web security & hacking.",
                    "Improving website speed & UI/UX.",
                    "Partnering for sponsored content.",
                  ][index]
                }
              </p>
            </div>
          ))}
        </div>
      </section>
      <footer className="bg-gray-900 text-gray-300 py-8 w-full">
        <div className="container mx-auto text-center space-y-5 px-4">
          {/* GitHub Link */}
          <p className="text-lg md:text-xl font-medium">
            Code is available on{" "}
            <a
              href="https://github.com/your-repo-link"
              className="text-blue-400 hover:underline inline-flex items-center gap-1"
            >
              <FaGithub className="text-lg" /> GitHub
            </a>
          </p>

          {/* Social Media Links */}
          <div className="flex justify-center items-center gap-6">
            <a
              href="https://instagram.com/yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaInstagram className="text-xl" /> <span>Instagram</span>
            </a>

            <a
              href="https://yourwebsite.com"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaBlog className="text-xl" /> <span>Blog</span>
            </a>
            <a
              href="https://tiktok.com/@yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaTiktok className="text-xl" /> <span>TikTok</span>
            </a>
            <a
              href="https://linkedin.com/in/yourprofile"
              className="hover:text-blue-400 flex items-center gap-2"
            >
              <FaLinkedin className="text-xl" /> <span>LinkedIn</span>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-lg md:text-xl text-gray-400 font-medium">
            &copy; 2025{" "}
            <span className="text-purple-400 font-semibold">
              YOUR_GOOD_NAME
            </span>
            . All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Connect;
