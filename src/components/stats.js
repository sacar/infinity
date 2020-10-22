import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import BackgroundImage from "gatsby-background-image";
import statsData from "../data/stats";
import PropTypes from "prop-types";

const Stats = () => {
  const data = useStaticQuery(graphql`
    query StatsBgImage {
      image: file(relativePath: { eq: "circuit.jpg" }) {
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
      className="relative bg-center bg-cover"
      fluid={data.image.childImageSharp.fluid}
    >
      <span
        className="w-full h-full absolute bg-indigo-900"
        style={{ opacity: "0.92" }}
      ></span>
      <div className="max-w-6xl relative py-12 mx-auto">
        <div className="flex items-center">
          <div className="w-full p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
            {statsData.map((data, index) => (
              <StatsData key={index} data={data} />
            ))}
          </div>
        </div>
      </div>
    </BackgroundImage>
  );
};

const StatsData = ({ data }) => {
  return (
    <>
      <div className="flex flex-col items-center justify-items-center text-indigo-100">
        {data.icon}
        <h1 className="font-semibold text-4xl">{data.value}</h1>
        <h2 className="font-semibold text-xl">{data.text}</h2>
      </div>
    </>
  );
};

StatsData.propTypes = {
  data: PropTypes.object.isRequired,
};

export default Stats;
