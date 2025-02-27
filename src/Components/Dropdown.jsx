import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Dropdown = ({ title, options, onLinkClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [isTouchScreen, setIsTouchScreen] = useState(false);

  useEffect(() => {
    const checkTouchScreen = () => setIsTouchScreen("ontouchstart" in window);
    checkTouchScreen();
    window.addEventListener("resize", checkTouchScreen);
    return () => window.removeEventListener("resize", checkTouchScreen);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      className="relative"
      ref={dropdownRef}
      onMouseEnter={() => !isTouchScreen && setIsOpen(true)}
      onMouseLeave={() => !isTouchScreen && setIsOpen(false)}
    >
      <button
        className="font-semibold transition px-4 py-2 rounded-lg text-gray-800 dark:text-gray-300 hover:text-purple-500 dark:hover:text-purple-500"
        onClick={() => isTouchScreen && setIsOpen(!isOpen)}
      >
        {title}
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 5 }}
            transition={{ duration: 0.3 }}
            className="absolute left-0 mt-2 bg-white dark:bg-gray-800 shadow-lg rounded-lg border border-gray-300 dark:border-gray-700 p-4 w-64 md:w-80 z-50"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {options.map((option, index) => (
                <Link
                  key={index}
                  to={option.link}
                  className="block p-3 rounded-lg transition hover:bg-gray-200 dark:hover:bg-gray-700"
                  onClick={() => {
                    setIsOpen(false);
                    if (onLinkClick) onLinkClick();
                  }}
                >
                  <h4 className="font-semibold text-gray-900 dark:text-white hover:text-purple-500">
                    {option.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {option.description}
                  </p>
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Dropdown;
