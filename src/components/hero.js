import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";

const Hero = () => {
  const data = useStaticQuery(graphql`
    query Heroimage {
      hero: file(relativePath: { eq: "shop1.jpg" }) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <BackgroundImage
      className="relative bg-cover bg-center"
      fluid={data.hero.childImageSharp.fluid}
      style={{ minHeight: "75vh" }}
    >
      <span className="w-full h-full absolute opacity-75 bg-black"></span>
      <div
        className="max-w-6xl relative flex items-center justify-center lg:justify-start mx-auto p-6"
        style={{ minHeight: "75vh" }}
      >
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left md:w-7/12 ">
          <Heading />
          <Subtext />
          <Button />
        </div>
      </div>
    </BackgroundImage>
  );
};

const Heading = () => (
  <h1 className="text-indigo-100 font-semibold text-5xl">
    Protect Your Devices For Extended Period
  </h1>
);

const Subtext = () => (
  <p className="mt-4 text-lg text-gray-300">
    We provide extended warranty for your devices upto five years through our{" "}
    <span className="text-indigo-800 font-bold tracking-wider">InfExt</span>{" "}
    program.
  </p>
);

const Button = () => (
  <div className="mt-8 flex  space-x-4">
    <a
      href="#"
      className="whitespace-no-wrap inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-800 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline  transition duration-150 ease-in-out "
    >
      Get Started
    </a>
  </div>
);

export default Hero;
