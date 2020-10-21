import React from "react";
import PropTypes from "prop-types";
import { Link } from "gatsby";

import Menus from "../../../data/navigationMenus";
import Button from '../../shared/button'
const Navigation = ({isExpanded}) => (
  <>
    <nav
      className={`${
        isExpanded ? `block ` : `hidden`
      } md:block md:mx-auto md:items-center w-full md:w-auto md:flex-grow`}
    >
      {Menus.map((link) => (
        <Link
        className={`${
          isExpanded ? ` hover:bg-gray-300` : ``
        } rounded-md font-normal leading-5  block mt-4 text-gray-700 no-underline md:inline-block px-2 py-1 md:mt-0 md:ml-6 `}
          key={link.title}
          to={link.route}
        >
          {link.title}
        </Link>
      ))}

        <Button text="Sign In"/>
     
       
    </nav>
  </>
);

Navigation.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};

export default Navigation;
