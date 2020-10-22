import React from "react";
import features from "../data/features";
import PropTypes from "prop-types";

const Features = () => {

  return (
    <div>
      <h2 className="text-4xl font-bold text-center text-indigo-700 ">
        Why Choose us?
      </h2>
      <ul className="mt-6 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, index) => {

          return <FeatureCard key={index} feature={feature}  />;
        })}
      </ul>
    </div>
  );
};

const FeatureCard = ({feature}) => {
  return (
    <li className="bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150">
      <div className="flex flex-col justify-start items-center space-y-4">
        <div className="h-12 w-12 rounded-md bg-indigo-200 p-2">
        <img src={feature.image} alt={feature.name}></img>
        </div>
        <h3 className="text-lg font-semibold ">{feature.name}</h3>
        <p className="text-center px-4 pb-4">{feature.text}</p>
      </div>
    </li>
  );
};

FeatureCard.propTypes = {
  feature: PropTypes.object.isRequired,
};

export default Features;
