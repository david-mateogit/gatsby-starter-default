import React from "react";
import { css } from "styled-components";
import Image from "./image";

const About = () => (
  <section
    id="about"
    css={css`
      height: 600px;
    `}
  >
    <div
      css={css`
        background-color: #656dba;
        border-width: 0;

        display: block;

        margin: 0;
        padding: 2rem;
        text-align: center;
      `}
    >
      <h2
        css={css`
          color: #fff;
          font-size: 2rem;
          letter-spacing: 1px;
        `}
      >
        Conocenos!
      </h2>
    </div>
    <div
      css={css`
        display: flex;
        margin-bottom: 2rem;
        justify-content: space-around;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 50%;
        `}
      >
        <h1>Dra. Claritza Sanchez.</h1>
        <p
          css={css`
            font-size: 1.5rem;
          `}
        >
          Somos un equipo de profesionales que trabajamos para devolver la salud
          dental a nuestros pacientes...
        </p>
      </div>
      <div
        css={css`
          width: 300px;
          height: 300px;
        `}
      >
        <Image />
      </div>
    </div>
  </section>
);

export default About;
