import * as React from "react";
import styled, { css } from "styled-components";

import AnchorLink from "react-anchor-link-smooth-scroll";
import { Link } from "gatsby";
import {
  FaTooth,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "./navbar";

const Logo = styled(Link)`
  color: #f0e3ff;
  font-size: 1rem;
  padding: 0.35rem;
  text-decoration: none;
  line-height: 0.5;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
`;

const Footer = () => (
  <>
    <Navbar />
    <footer
      css={css`
        text-align: right;
        background: #3e206d;
        display: flex;
        justify-content: space-between;
        align-items: flex-end;
        padding: 0.5rem 1vw;
        margin-top: 0;
        @media (min-width: 550px) {
          padding-left: calc((100vw - 750px - 0.5rem) / 2);
          padding-right: calc((100vw - 750px - 0.5rem) / 2);
        }
      `}
    >
      <Logo to="/">
        <FaTooth size="6rem" color="white" />
        <div>
          <h1
            css={css`
              color: #916dd5;
              font-size: 2.2rem;
              font-weight: bold;
              text-transform: uppercase;
              margin: 0;

              @media (max-width: 550px) {
                font-size: 2.3rem;
              }
            `}
          >
            {" "}
            Clínica Dental
          </h1>{" "}
          <h1
            css={css`
              font-size: 1.8rem;
              color: #f0e3ff;
              margin: 0.5rem;
              @media (max-width: 550px) {
                font-size: 1.8rem;
              }
            `}
          >
            Dra. Claritza Sanchez
          </h1>
        </div>
      </Logo>
      <div
        css={css`
          padding: 0 1rem;
          display: flex;
          flex-direction: column;
          margin-bottom: 3px;
          @media (max-width: 550px) {
            display: none;
          }
        `}
      >
        <a
          target="_blank"
          rel="noopener noreferrer"
          href="https://www.google.com/maps/dir/19.4436952,-70.6811497/Clinica+Dental+Dra+Claritza+Sanchez,+Carretera+Sos%C3%BAa+cabarete+esq,+Dr.+Rosen,+Sos%C3%BAa+57000/@19.6035907,-70.7404661,11z/data=!3m1!4b1!4m9!4m8!1m1!4e1!1m5!1m1!1s0x8eb1e3708f32166f:0x2de2f93b48a5594f!2m2!1d-70.5137815!2d19.7635945"
          css={css`
            text-decoration: none;
            color: #f0e3ff;
            @media (max-width: 550px) {
              display: none;
            }
          `}
        >
          <FaMapMarkerAlt /> Carretera Sosúa Cabarete <br /> esq. Dr. Rosen,
          Sosúa 57000 <br />
        </a>
        <a
          href="tel:8095713895"
          css={css`
            font-size: 1.8rem;
            text-decoration: none;
            color: #f0e3ff;
            font-weight: bold;
            margin-top: 2px;

            @media (max-width: 550px) {
              font-size: 1rem;
            }
          `}
        >
          (809) 571-3895
        </a>
        <div
          css={css`
            display: flex;
            justify-content: flex-end;
            align-items: center;
            margin-top: auto;
          `}
        >
          <a
            href="https://www.facebook.com/pages/category/General-Dentist/Cl%C3%ADnica-Dental-Dra-Claritza-Sanchez-1410900932508187/"
            target="_blank"
            rel="noopener noreferrer"
            title="Dale like en Facebook"
            css={css`
              margin-right: 0.5rem;
            `}
          >
            <FaFacebookSquare color="#f0e3ff" size="2rem" />
          </a>
          <a
            href="https://www.instagram.com/p/BzfpWtdoIuP/"
            target="_blank"
            rel="noopener noreferrer"
            title="Siguenos en Instagram"
            css={css`
              margin-top: 0;
            `}
          >
            <FaInstagram color="#f0e3ff" size="2rem" />
          </a>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
