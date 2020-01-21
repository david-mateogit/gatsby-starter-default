import React from "react";
import { css } from "styled-components";
import { FaMapMarkerAlt } from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Button from "./button";

const Navbar = () => (
  <section
    css={css`
      background: #3e206d;
      color: #f0e3ff;
      display: flex;
      justify-content: center;
      padding: 0.3rem 5vw 0;
      margin-top: 0;
      @media (min-width: 551px) {
        display: none;
      }
    `}
  >
    <nav
      css={css`
        margin-top: 0;
        padding: 0 1rem;
        color: #f0e3ff;
      `}
    >
      <Button>
        <a
          href="tel:8095713895"
          css={css`
            font-size: 1.5rem;
            text-decoration: none;
            color: #3e206d;
            font-weight: bold;
            margin-top: 2px;

            @media (max-width: 550px) {
              font-size: 1rem;
            }
          `}
        >
          <MdPhone /> Llamar
        </a>
      </Button>
      <Button>
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://goo.gl/maps/Sj7X3iGNqPTfDBPU7"
          css={css`
            font-size: 1.5rem;
            text-decoration: none;
            color: #3e206d;
            font-weight: bold;
            margin-top: 2px;

            @media (max-width: 550px) {
              font-size: 1rem;
            }
          `}
        >
          <FaMapMarkerAlt /> Mapa
        </a>
      </Button>
    </nav>
  </section>
);

export default Navbar;
