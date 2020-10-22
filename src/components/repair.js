import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const Repair = () => {
  const data = useStaticQuery(graphql`
    query ServiceImage {
      image: file(relativePath: { eq: "shop2.jpg" }) {
        name
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <div className="grid grid-cols-1 px-4 lg:grid-cols-2 gap-8">
      <div className=" ml-6 mr-auto w-4/5 lg:w-full lg:m-0">
        <div className="bg-indigo-700 pl-4 pb-4">
          <Img fluid={data.image.childImageSharp.fluid} alt="service" />
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
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, do eiusmod
          temp or incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis ostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo in consequat. Duis aute irure dolor in reprehenderit.
        </p>
      </div>
    </div>
  );
};

export default Repair;
