import React from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";
import {
  FaTooth,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdPhone } from "react-icons/md";
import Button from "./button";

const Navbar = () => (
  <section
    css={css`
      background: #3e206d;
      color: #f0e3ff;
      display: flex;
      justify-content: flex-end;
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
        <MdPhone /> Llamar
      </Button>
      <Button>
        <FaMapMarkerAlt /> Mapa
      </Button>
    </nav>
  </section>
);

export default Navbar;
