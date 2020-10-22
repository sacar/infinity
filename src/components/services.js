import React from "react";
import serviceAreas from "../data/services";

const Services = () => (
  <div className="px-6 flex flex-col items-center space-y-6">
    <h1 className="text-4xl text-center font-bold text-indigo-800">
      Our <span className="text-indigo-500">Service</span> Areas
    </h1>
    <p className="text-gray-700 text-center text-lg w-4/5 md:w-3/5">
      Explore Our Completed Services! Consectetur adipiscing elitt elit tellus,
      luctus pulvinar dapibus leoconsectetur luctus nec.
    </p>
    <div className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {serviceAreas.map((service) => {
        return (
          <div
            key={service.type}
            className="flex flex-col hover:border-2 hover:border-indigo-700 p-8 items-center justify-start space-y-4 shadow-lg"
          >
            <div className="relative h-24 w-24 p-6 rounded-full border border-indigo-700">
              <img src={service.icon} alt="Skill"></img>
            </div>
            <h3 className="text-lg text-indigo-500 font-medium">
              {service.type}
            </h3>
            <p className=" text-base text-gray-700 text-center">
              {service.text}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);

export default Services;
