import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import menus from "../../../data/navigationMenus";

const Menus = () => (
  <nav className="hidden pl-2 lg:flex space-x-10">
    {menus.map((menu) => (
      <Link
        key={menu.title}
        to={menu.route}
        className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition duration-150 ease-in-out"
      >
        {menu.title}
      </Link>
    ))}
  </nav>
);

Menus.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default Menus;
