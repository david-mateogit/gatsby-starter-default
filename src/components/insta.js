import React from "react";
import Image from "gatsby-image";
import { css } from "styled-components";
import useInstagram from "../hooks/use-instagram";

const Insta = () => {
  const instaPhotos = useInstagram();
  const { username } = instaPhotos[0];

  return (
    <section
      css={css`
        padding: 1rem;
        margin-top: 1rem;
      `}
    >
      <h2>Fotos de Instagram de @{username}</h2>
      <div
        css={css`
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;
          margin: 1rem -0.5rem;
          padding: 0.5rem 0;
        `}
      >
        {instaPhotos.map(photo => (
          <a
            href={`https://instagram.com/p/${photo.id}/`}
            css={css`
              box-shadow: 0;
              display: block;
              margin: 0.5rem;
              max-width: calc(33% - 1rem);
              width: 150px;
              transition: 200ms box-shadow linear;
              :focus,
              :hover {
                box-shadow: 0 2px 14px #22222244;
                z-index: 10;
              }
            `}
          >
            <Image
              key={photo.id}
              css={css`
                width: 100%;
                * {
                  margin-top: 0;
                }
              `}
              fluid={photo.fluid}
              alt={photo.caption}
            />
          </a>
        ))}
      </div>
      <a
        href={`https://instagram.com/${username}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver mas en Instagram &rarr;
      </a>
    </section>
  );
};

export default Insta;
