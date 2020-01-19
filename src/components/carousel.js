import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { css } from "styled-components";

import BackgroundSlider from "gatsby-image-background-slider";

const Carousel = () => (
  <div
    css={css`
      height: 500px;
      width: 100vw;
      max-width: 960px;
      overflow: hidden;
      position: relative;
      left: 0;
      top: 0;
      margin-top: -15px;
    `}
  >
    <BackgroundSlider
      query={useStaticQuery(graphql`
        query {
          backgrounds: allFile(
            filter: { sourceInstanceName: { eq: "backgrounds" } }
          ) {
            nodes {
              relativePath
              childImageSharp {
                fluid(maxWidth: 500, quality: 100) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      `)}
    />
  </div>
);

export default Carousel;
