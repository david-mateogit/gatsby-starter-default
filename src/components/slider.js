import React from "react";

import { css } from "styled-components";
import { FaWhatsapp } from "react-icons/fa";

import Carousel from "./carousel";

const Slider = () => (
  <section
    css={css`
      height: 400px;
      max-width: 960px;
      overflow: hidden;
      display: flex;
      margin-top: 0;
      padding: 0;
    `}
  >
    <div
      css={css`
        background-color: #656dba;
        border-width: 0;
        color: rgba(255, 255, 255, 0.75);
        display: block;
        height: 385px;
        width: 50%;
        margin: 0;
        padding: 0;
        text-align: center;
      `}
    >
      <p
        css={css`
          border-width: 0;
          color: #fff;
          font-size: 1.75em;
          font-weight: 500;
          letter-spacing: 0.1em;
          line-height: 1.5;
          margin: 0 0 0.65em;
          padding: 2rem 1rem 0;
          text-transform: uppercase;
          vertical-align: baseline;
        `}
      >
        Haz <br /> Tu Cita <br /> Hoy Mismo!
      </p>
      <a
        href="https://wa.me/18099172971"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaWhatsapp size="8rem" color="green" />
      </a>
    </div>
    <Carousel />
  </section>
);

export default Slider;
