import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const topics = {
  "C++ Programming": {
    Basic: [
      "🔹 What is C++ and why should you learn it?",
      "🔹 How does the C++ compiler work behind the scenes?",
      "🔹 Mastering Variables, Data Types & Operators",
      "🔹 Unlocking the Power of Conditional Statements & Loops",
      "🔹 Functions & Scope: Writing Efficient Code",
      "🔹 Hands-on Project: Building Your First Calculator",
    ],
    Intermediate: [
      "🔸 Object-Oriented Programming (OOP) - Real-World Applications",
      "🔸 Classes, Objects, Inheritance & Polymorphism Explained",
      "🔸 File Handling & Data Management",
      "🔸 Handling Errors Like a Pro: Exception Handling",
      "🔸 Practical Project: Student Management System",
    ],
    Advanced: [
      "🚀 Mastering Data Structures & Algorithms (DSA) in C++",
      "🚀 Solving Real Problems with Linked Lists, Stacks & Queues",
      "🚀 Understanding Trees, Graphs & Complex Algorithms",
      "🚀 Advanced Sorting & Searching Techniques",
      "🚀 Real-World Project: Inventory Management System",
    ],
  },
  "Web Development": {
    Basic: [
      "🌐 The Ultimate Beginner's Guide to Web Development",
      "🌐 HTML, CSS & JavaScript - The Core Trio Explained",
      "🌐 Building Your First Interactive Web Page",
      "🌐 Mini Project: Personal Portfolio Website",
    ],
    Intermediate: [
      "💻 Styling Like a Pro: Tailwind CSS & Bootstrap",
      "💻 JavaScript DOM Manipulation & Event Handling",
      "💻 Introduction to PHP & MySQL for Dynamic Websites",
      "💻 Hands-on Project: Creating a Blog Website",
    ],
    Advanced: [
      "⚡ Full-Stack Development with React & Node.js",
      "⚡ Creating & Consuming REST APIs for Scalable Apps",
      "⚡ Mastering Databases: MongoDB, MySQL & Firebase",
      "⚡ Advanced Project: E-Commerce Platform with Authentication",
    ],
  },
  Cybersecurity: {
    Basic: [
      "🛡️ What is Cybersecurity? Why Should You Care?",
      "🛡️ Common Threats & How Hackers Think",
      "🛡️ Introduction to Encryption & Secure Passwords",
      "🛡️ Cyber Hygiene: Protecting Yourself Online",
    ],
    Intermediate: [
      "⚠️ Ethical Hacking Basics - How Hackers Break Systems",
      "⚠️ Finding & Fixing Security Vulnerabilities in Websites",
      "⚠️ Writing Secure Code to Prevent Cyber Attacks",
      "⚠️ Setting Up a Virtual Hacking Lab - Practical Learning",
    ],
    Advanced: [
      "💀 Website Hacking Techniques: SQL Injection & XSS",
      "💀 Advanced Penetration Testing - Breaking Into Systems",
      "💀 Real-World Cybersecurity Project: Securing Web Applications",
    ],
  },
  Networking: {
    Basic: [
      "🔗 What is Networking? How Does the Internet Work?",
      "🔗 Understanding the TCP/IP & OSI Model",
      "🔗 How to Set Up & Secure a Local Network",
    ],
    Intermediate: [
      "🌍 Advanced Routing, Switching & Firewalls",
      "🌍 Diagnosing & Fixing Network Issues Like a Pro",
      "🌍 VPNs & Secure Communication - Stay Anonymous Online",
    ],
    Advanced: [
      "🔒 Network Security: Preventing Hacks & Attacks",
      "🔒 System Administration & Server Hardening",
      "🔒 Real-World Project: Building an Enterprise Network Security Plan",
    ],
  },
};

const TeachingServices = () => {
  const [expanded, setExpanded] = useState({});
  const navigate = useNavigate();

  const toggleExpand = (category, level) => {
    setExpanded((prev) => ({
      ...prev,
      [`${category}-${level}`]: !prev[`${category}-${level}`],
    }));
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center px-4 sm:px-8 lg:px-10 pt-20">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-6">📚 Unlock Your Potential with Expert Teaching Services</h2>
      <p className="text-md md:text-lg text-center max-w-3xl mb-4">
        Gain hands-on experience in Programming, Cybersecurity, Web Development, and Networking. Learn from real-world projects and become industry-ready.
      </p>
      {Object.entries(topics).map(([category, levels]) => (
        <div key={category} className="w-full max-w-5xl mb-6">
          <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-purple-600">{category}</h3>
          {Object.entries(levels).map(([level, subtopics]) => (
            <div key={level} className="bg-white dark:bg-gray-800 mb-4 rounded-lg shadow-md overflow-hidden">
              <button
                className="w-full p-4 bg-purple-600 text-white text-left text-lg font-semibold flex justify-between items-center focus:outline-none"
                onClick={() => toggleExpand(category, level)}
              >
                {level} {expanded[`${category}-${level}`] ? "🔽" : "▶️"}
              </button>
              {expanded[`${category}-${level}`] && (
                <div className="p-4 border-t border-gray-300 dark:border-gray-700">
                  <ul className="list-none list-inside text-gray-700 dark:text-gray-300">
                    {subtopics.map((topic, index) => (
                      <li key={index} className="mb-2">{topic}</li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          <button 
            className="mt-4 px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition w-full shadow-md hover:shadow-lg"
            onClick={() => navigate('/contact')}
          >
            Contact Me 📩
          </button>
        </div>
      ))}
    </div>
  );
};

export default TeachingServices;