import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Testimonials from "../components/testimonials";
import heroImage from "../images/shop1.jpg";
import customerSupport from "../images/customer-support.svg";
import experience from "../images/experience.svg";
import quality from "../images/quality.svg";
import guarantee from "../images/guarantee.svg";
import repair from "../images/shop2.jpg";
import circuit from "../images/patrick-hendry-A1v0-iH3T5A-unsplash.jpg";

import serviceAreas from "../data/services";

function IndexPage() {
  return (
    <Layout>
      <SEO
        keywords={[`gatsby`, `tailwind`, `react`, `tailwindcss`]}
        title="Home"
      />
      <main className=" sm:pt-0  mt-12 sm:mt-12 md:mt-6 w-full ">
        <div
          className="relative pt-16 pb-32 flex content-center items-center justify-center"
          style={{ minHeight: "75vh" }}
        >
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${heroImage})` }}
          >
            <span className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="max-w-6xl relative mx-auto">
            <div className="flex flex-wrap items-center">
              <div className="w-full lg:w-6/12 px-4 mx-auto text-center">
                <div className="">
                  <h1 className="text-indigo-100 font-semibold text-5xl">
                    Protect Your Devices For Extended Period
                  </h1>
                  <p className="mt-4 text-lg text-gray-300">
                    We provide extended warranty for your devices upto five
                    years through our{" "}
                    <span className="text-indigo-800 font-bold tracking-wider">
                      InfExt
                    </span>{" "}
                    program.
                  </p>
                  <div className="mt-8 mx-auto space-x-4">
                    <a
                      href="#"
                      className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline  transition duration-150 ease-in-out "
                    >
                      Get Started
                    </a>
                    <a
                      href="/about"
                      className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline transition duration-150 ease-in-out "
                    >
                      Track your Device
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" max-w-6xl mx-auto pt-16  ">
          <h2 className="text-2xl font-medium text-center text-indigo-700 ">
            {" "}
            Why Choose us?
          </h2>
          <ul className="mt-2 p-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <li className="bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150">
              <div className="flex flex-col justify-start items-center space-y-4">
                <div className="h-12 w-12 rounded-md bg-indigo-200 p-2">
                  <img src={customerSupport} alt="Skill"></img>
                </div>
                <h3 className="text-lg font-semibold ">Skill</h3>
                <p className="text-center px-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sapien urna, pharetra sit amet rhoncus in, maximus vel
                  ex. Fusce.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150">
              <div className="flex flex-col justify-start items-center space-y-4">
                <div className="h-12 w-12 rounded-md bg-indigo-200 p-2">
                  <img src={experience} alt="Skill"></img>
                </div>
                <h3 className="text-lg font-semibold ">Experience</h3>
                <p className="text-center px-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sapien urna, pharetra sit amet rhoncus in, maximus vel
                  ex. Fusce.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150">
              <div className="flex flex-col justify-start items-center space-y-4">
                <div className="h-12 w-12 rounded-md bg-indigo-200 p-2">
                  <img src={quality} alt="Skill"></img>
                </div>
                <h3 className="text-lg font-semibold ">Quality</h3>
                <p className="text-center px-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sapien urna, pharetra sit amet rhoncus in, maximus vel
                  ex. Fusce.
                </p>
              </div>
            </li>
            <li className="bg-white rounded-lg shadow-md hover:shadow-xl transition ease-in-out duration-150">
              <div className="flex flex-col justify-start items-center space-y-4">
                <div className="h-12 w-12 rounded-md bg-indigo-200 p-2">
                  <img src={guarantee} alt="Skill"></img>
                </div>
                <h3 className="text-lg font-semibold ">Guarantees</h3>
                <p className="text-center px-4 pb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer sapien urna, pharetra sit amet rhoncus in, maximus vel
                  ex. Fusce.
                </p>
              </div>
            </li>
          </ul>
          <div className="pt-16">
            <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-8">
              <div className=" ml-6 mr-auto w-4/5 lg:w-full lg:m-0">
                <div className="bg-indigo-700">
                  <img className="ml-4 pb-4" src={repair} alt="service" />
                </div>
              </div>
              <div className="flex flex-col justify-start items-start p-6">
                <h1 className="text-4xl leading-10 font-bold pb-6 text-indigo-700">
                  Repair Services For Your Computer.
                </h1>
                <ul className="pb-6 space-y-2">
                  <li className="text-indigo-400 flex items-center justify-start space-x-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-lg font-medium">
                      Lorem Ipsum is not simply random text exercitation
                    </span>
                  </li>
                  <li className="text-indigo-400 flex items-center justify-start space-x-2">
                    <svg
                      className="h-5 w-5"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className=" text-lg font-medium">
                      If you are going to use a passage aute irure dolor
                    </span>
                  </li>
                </ul>
                <p className="text-gray-600 font-normal">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, do
                  eiusmod temp or incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis ostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo in consequat. Duis aute
                  irure dolor in reprehenderit.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="relative mt-16 w-full" style={{ zIndex: "-1" }}>
          <div
            className="absolute top-0 w-full h-full bg-center bg-cover"
            style={{ backgroundImage: `url(${circuit})` }}
          >
            <span
              className="w-full h-full absolute bg-indigo-900"
              style={{ opacity: "0.92" }}
            ></span>
          </div>
          <div className="max-w-6xl relative py-12 mx-auto">
            <div className="flex items-center">
              <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                <div className="flex flex-col items-center justify-items-center text-indigo-100">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                  <h1 className="font-semibold text-4xl">2,000</h1>
                  <h2 className="font-semibold text-xl">Happy Clients</h2>
                </div>
                <div className="flex flex-col items-center justify-items-center text-indigo-100">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"
                    />
                  </svg>
                  <h1 className="font-semibold text-4xl">1,010</h1>
                  <h2 className="font-semibold text-xl">Repair Done</h2>
                </div>
                <div className="flex flex-col items-center justify-items-center text-indigo-100">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                  <h1 className="font-semibold text-4xl">96</h1>
                  <h2 className="font-semibold text-xl">Expert Team</h2>
                </div>
                <div className="flex flex-col items-center justify-items-center text-indigo-100">
                  <svg
                    className="h-10 w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M12 14l9-5-9-5-9 5 9 5z" />
                    <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                    />
                  </svg>
                  <h1 className="font-semibold text-4xl">25</h1>
                  <h2 className="font-semibold text-xl">Award Won</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="mt-16 px-6 flex flex-col items-center space-y-6">
            <h1 className="text-4xl text-center font-bold text-indigo-800">
              Our <span className="text-indigo-500">Service</span> Areas
            </h1>
            <p className="text-gray-700 text-center text-lg w-4/5 md:w-3/5">
              Explore Our Completed Services! Consectetur adipiscing elitt elit
              tellus, luctus pulvinar dapibus leoconsectetur luctus nec.
            </p>
            <div className="w-full pt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {serviceAreas.map((service) => {
                return (
                  <div
                    key={service.type}
                    className="flex flex-col hover:border-2 hover:border-indigo-700 p-8 items-center justify-start space-y-4 shadow-lg"
                  >
                    <div className="relative h-24 w-24 p-6 rounded-full border border-indigo-700">
                      <img src={customerSupport} alt="Skill"></img>
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
        </div>
        <div className="w-full mt-16 py-4 bg-gray-100">
          <Testimonials />
        </div>
        <div className="w-full bg-indigo-600">
          <div className=" flex flex-col py-6 md:flex-row h-full  justify-between items-center max-w-6xl mx-auto px-6">
            <div className="flex flex-col items-center justify-center py-4">
              <span className="text-xl text-white font-semibold">
                CALL US 24/7
              </span>
              <span className="text-2xl text-white font-light "> +977-01-554787</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <span className="text-xl text-white font-semibold">
                EMAIL ADDRESS
              </span>
              <span className="text-2xl text-white font-light "> info@infinity.com</span>
            </div>
            <div className="flex flex-col items-center justify-center py-4">
              <span className="text-xl text-white font-semibold">
                OPEN HOURS
              </span>
              <span className="text-2xl text-white font-light "> Daily 8:00-19:00</span>
            </div>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default IndexPage;
