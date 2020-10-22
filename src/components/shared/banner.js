import React from "react";
import circuit from "../../images/circuit.jpg";
import PropTypes from "prop-types";

const Banner = ({ page }) => (
  <>
    <div className="relative w-full" style={{ zIndex: "-1" }}>
      <div
        className="absolute top-0 w-full h-full bg-center bg-cover"
        style={{ backgroundImage: `url(${circuit})` }}
      >
        <span
          className="w-full h-full absolute bg-indigo-900"
          style={{ opacity: "0.92" }}
        ></span>
      </div>
      <div className="max-w-6xl relative py-10 mx-auto flex items-center justify-center">
        <h1 className="text-2xl  p-6 text-white">{page}</h1>
      </div>
    </div>
  </>
);

Banner.propTypes = {
  page: PropTypes.string.isRequired,
};

export default Banner;
