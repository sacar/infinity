import React from "react";
import PropTypes from "prop-types";

const ToogleButton = ({ toogleButton }) => (
  <>
    <button
      className="items-center block px-3 py-2 text-black border border-white rounded md:hidden focus:outline-none"
      onClick={() => toogleButton()}
    >
      <svg
        className="w-5 h-5 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </svg>
    </button>
  </>
);

ToogleButton.propTypes = {
  toogleButton: PropTypes.func.isRequired,
};

export default ToogleButton;
