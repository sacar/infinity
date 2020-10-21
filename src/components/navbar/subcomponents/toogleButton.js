import React from "react";
import PropTypes from "prop-types";

const ToogleButton = ({ toggleExpansion }) => (
  <>
    <div className="-mr-2 -my-2 lg:hidden">
      <button
        type="button"
        className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out  "
        onClick={() => toggleExpansion(true)}
      >
        <svg
          className="h-6 w-6"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </div>
  </>
);

ToogleButton.propTypes = {
  toggleExpansion: PropTypes.func.isRequired,
};

export default ToogleButton;
