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
      padding: 0.3rem 5vw;
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
          href="https://www.google.com/maps/dir/19.4436952,-70.6811497/Clinica+Dental+Dra+Claritza+Sanchez,+Carretera+Sos%C3%BAa+cabarete+esq,+Dr.+Rosen,+Sos%C3%BAa+57000/@19.6035907,-70.7404661,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8eb1e3708f32166f:0x2de2f93b48a5594f!2m2!1d-70.5137815!2d19.7635945"
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
