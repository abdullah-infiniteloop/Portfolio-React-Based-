import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";

const NavLinks = ({ mobile, closeMenu }) => {
  const location = useLocation();

  const links = [
    { id: 1, name: "Home", path: "/" },
    { id: 2, name: "Projects", path: "/projects" },
    { id: 3, name: "About Us", path: "/about" },
    { id: 4, name: "Contact", path: "/contact" },
    { id: 5, name: "Services", path: "/services" },
  ];

  return (
    <ul className={`${mobile ? "space-y-4 flex flex-col" : "flex space-x-6"}`}>
      {links.map((link) => {
        const isActive = location.pathname === link.path;
        return (
          <li key={link.id}>
            <RouterLink
              to={link.path}
              className={`font-semibold transition ${
                isActive
                  ? "text-purple-600"
                  : "text-gray-700 dark:text-gray-300"
              }`}
              onClick={mobile ? closeMenu : undefined}
            >
              {link.name}
            </RouterLink>
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;
