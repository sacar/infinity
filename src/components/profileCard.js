import React from "react";
import PropTypes from "prop-types";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image";

const ProfileCard = ({ member }) => {
  const data = useStaticQuery(graphql`
    query Images {
      image: file(relativePath: { eq: "ben-parker-2.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
          fixed(width: 125, height: 125) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      allimage: allFile(filter: { relativeDirectory: { eq: "teams" } }) {
        nodes {
          name
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  `);

  return (
    <div className="bg-orange-100  rounded-sm p-4 overflow-hidden flex-1 flex flex-col">
      {/* <img src={member.image} alt="team" /> */}
      {data.allimage.nodes.map((image) => {
        if (image.name === member.file) {
          return <Img fluid={image.childImageSharp.fluid} alt={member.name} />;
        }
      })}

      <div className="p-4 flex-1 flex flex-col items-center">
        <h3 className="mb-1 text-xl font-medium text-center text-indigo-900">
          {member.name}
        </h3>
        <h4 className="text-xs tracking-wide font-normal text-center text-gray-600">
          {member.title}
        </h4>
      </div>
    </div>
  );
};

ProfileCard.propTypes = {
  member: PropTypes.object.isRequired,
};

export default ProfileCard;
