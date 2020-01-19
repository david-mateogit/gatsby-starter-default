import React from "react";
import { Link, graphql, useStaticQuery } from "gatsby";
import styled, { css } from "styled-components";
import BackgroundImage from "gatsby-background-image";

const ImageBackground = styled(BackgroundImage)`
  background-position: top 20% center;
  background-size: cover;
  height: 300px;
  width: 300px;
  margin: 0.5rem;
`;

const ServiceBox = ({ service }) => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "brackets.jpg" }) {
        sharp: childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return (
    <>
      <ImageBackground tag="section" fluid={image.sharp.fluid} fadeIn="soft">
        <div
          css={css`
            width: 300px;
            height: 100%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
          `}
        >
          <div
            css={css`
              background: #916dd5;
            `}
          >
            <h3
              css={css`
                padding: 0.8rem;
                color: white;
                letter-spacing: 1px;
                line-height: 1.1;
              `}
            >
              {service}
            </h3>
          </div>
        </div>
      </ImageBackground>
    </>
  );
};

export default ServiceBox;
