import React from "react";
import { useNavigate } from "react-router-dom";

const webDevelopmentServices = [
  {
    type: "Business Websites",
    description:
      "Professional, secure, and high-performance websites tailored for businesses, startups, and agencies.",
    technologies: "HTML, CSS, JavaScript, PHP, MySQL, WordPress, Bootstrap",
  },
  {
    type: "Portfolio Websites",
    description:
      "Modern, sleek, and visually appealing portfolio websites to showcase your skills and projects effectively.",
    technologies: "HTML, CSS, JavaScript, Tailwind CSS, React, Next.js",
  },
  {
    type: "E-Commerce Websites",
    description:
      "Fully functional and secure online stores with seamless payment integration and user-friendly design.",
    technologies:
      "HTML, CSS, JavaScript, PHP, Laravel, MySQL, WooCommerce, Shopify",
  },
  {
    type: "Blog Websites",
    description:
      "Custom blog websites optimized for SEO with smooth performance and engaging user experience.",
    technologies: "HTML, CSS, JavaScript, PHP, WordPress, MySQL, Ghost CMS",
  },
  {
    type: "Custom Web Applications",
    description:
      "Tailor-made web applications designed for businesses and startups to meet unique requirements.",
    technologies:
      "HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, MySQL",
  },
];

const WebDevelopmentServices = () => {
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white min-h-screen flex flex-col items-center px-6 py-12 cursor-pointer">
      <h2 className="text-3xl md:text-5xl font-bold text-center mb-8">
        🌐 Professional Web Development Services
      </h2>
      <p className="text-base md:text-lg text-center max-w-3xl leading-relaxed mb-8">
        Get a high-quality, secure, and professional website built with modern
        technologies. Whether you need a business website, portfolio, or
        e-commerce store, I provide top-notch development services tailored to
        your needs.
      </p>

      {/* Responsive Table */}
      <div className="w-full max-w-6xl overflow-x-auto">
        <table className="min-w-full border-collapse border border-gray-300 dark:border-gray-700 text-left">
          <thead>
            <tr className="bg-purple-600 text-white text-sm md:text-lg">
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Website Type
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Description
              </th>
              <th className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                Technologies Used
              </th>
            </tr>
          </thead>
          <tbody>
            {webDevelopmentServices.map((service, index) => (
              <tr
                key={index}
                className="bg-white dark:bg-gray-800 text-sm md:text-base hover:bg-gray-200 dark:hover:bg-gray-700 transition"
              >
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 font-semibold">
                  {service.type}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3">
                  {service.description}
                </td>
                <td className="border border-gray-300 dark:border-gray-700 px-4 py-3 whitespace-pre-line">
                  {service.technologies}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Contact Button */}
      <button
        className="mt-8 px-6 py-3 bg-purple-600 text-white text-lg rounded-lg hover:bg-purple-700 transition-transform transform hover:scale-105"
        onClick={() => navigate("/contact")}
      >
        Contact Me 📩
      </button>
    </div>
  );
};

export default WebDevelopmentServices;
