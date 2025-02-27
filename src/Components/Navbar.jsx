import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Sun, Moon } from "lucide-react";
import Dropdown from "./Dropdown";

const dropdownMenus = [
  {
    title: "Projects",
    options: [
      {
        title: "Future Projects",
        description: "Upcoming ideas & plans",
        link: "/projects/futureProjects",
      },
      {
        title: "Completed Projects",
        description: "Successfully delivered projects",
        link: "/projects/completedProjects",
      },
      {
        title: "Working Projects",
        description: "Ongoing developments",
        link: "/projects/workingProjects",
      },
      {
        title: "Research Projects",
        description: "Exploring new tech solutions",
        link: "/projects/researchProjects",
      },
    ],
  },
  {
    title: "About Us",
    options: [
      {
        title: "My Story",
        description: "How I started my journey",
        link: "/about/myStory",
      },
      {
        title: "My Journey",
        description: "My experiences & growth",
        link: "/about/myJourney",
      },
      {
        title: "Let's Connect & Grow",
        description: "Join me in building a strong tech community!",
        link: "/about/collaborate",
      },
    ],
  },
  {
    title: "Services",
    options: [
      {
        title: "Web Development",
        description: "Building modern websites",
        link: "/services/website",
      },
      {
        title: "Teaching",
        description: "Learn programming and web technologies.",
        link: "/services/teaching",
      },
    ],
  },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(
    () => localStorage.getItem("theme") === "dark"
  );

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  const handleLinkClick = () => {
    setIsOpen(false); // Close the mobile menu when a link is clicked
  };

  return (
    <nav className="bg-white dark:bg-black text-gray-800 dark:text-gray-300 fixed w-full top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4 lg:px-8">
        <NavLink
          to="/"
          className="text-2xl font-bold text-black dark:text-white hover:text-purple-500 dark:hover:text-purple-500"
        >
          YOUR_GOOD_NAME
        </NavLink>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-6 items-center">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `font-semibold ${
                isActive ? "text-purple-500" : "hover:text-purple-500"
              } dark:${
                isActive ? "text-purple-500" : "dark:hover:text-purple-500"
              }`
            }
            onClick={handleLinkClick}
          >
            Home
          </NavLink>

          {dropdownMenus.map((menu, index) => (
            <Dropdown
              key={index}
              title={menu.title}
              options={menu.options}
              onLinkClick={handleLinkClick}
            />
          ))}

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `font-semibold ${
                isActive ? "text-purple-500" : "hover:text-purple-500"
              } dark:${
                isActive ? "text-purple-500" : "dark:hover:text-purple-500"
              }`
            }
            onClick={handleLinkClick}
          >
            Contact
          </NavLink>
        </div>

        {/* Dark Mode Toggle */}
        <button onClick={() => setDarkMode(!darkMode)} className="p-2">
          {darkMode ? <Sun size={24} /> : <Moon size={28} />}
        </button>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden p-2">
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden bg-white dark:bg-black p-4 space-y-4 flex flex-col items-center"
          >
            <NavLink
              to="/"
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive ? "text-purple-500" : "hover:text-purple-500"
                } dark:${
                  isActive ? "text-purple-500" : "dark:hover:text-purple-500"
                }`
              }
              onClick={handleLinkClick}
            >
              Home
            </NavLink>

            {dropdownMenus.map((menu, index) => (
              <Dropdown
                key={index}
                title={menu.title}
                options={menu.options}
                onLinkClick={handleLinkClick}
              />
            ))}

            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `block font-semibold ${
                  isActive ? "text-purple-500" : "hover:text-purple-500"
                } dark:${
                  isActive ? "text-purple-500" : "dark:hover:text-purple-500"
                }`
              }
              onClick={handleLinkClick}
            >
              Contact
            </NavLink>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
