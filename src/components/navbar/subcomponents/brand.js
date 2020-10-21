import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import logo from "../../../images/logo-inifity.svg";

const Brand = ({ layout }) => {
  switch (layout) {

    case "mobile":
      return <MobileLayout/>;
    default:
      return <WebLayout/>;
  }
};

const WebLayout = () => (
  <div className="lg:w-0 lg:flex-1">
    <Link to="/" className="flex">
      <img className="h-8 w-auto sm:h-10" src={logo} alt="Workflow"></img>
      <span className="inline-flex items-center justify-center ml-3 text-xl leading-6 font-bold text-gray-700">
        INFINITY
      </span>
    </Link>
  </div>
);

const MobileLayout = () => (
  <div className="flex">
    <img className="h-8 w-auto sm:h-10" src={logo} alt="Workflow"></img>
    <span className="inline-flex items-center justify-center ml-3 text-xl leading-6 font-bold text-gray-700">
      INFINITY
    </span>
  </div>
);

Brand.propTypes = {
  layout: PropTypes.string,
};

export default Brand;
