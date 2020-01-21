import * as React from "react";
import styled, { css } from "styled-components";

import AnchorLink from "react-anchor-link-smooth-scroll";
import {
  FaTooth,
  FaFacebookSquare,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Navbar from "./navbar";

const Logo = styled(AnchorLink)`
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
        padding: 0.5rem 1vw 0;
        margin: 0;
        margin-top: -10px;
        @media (min-width: 550px) {
          padding-left: calc((100vw - 750px - 0.5rem) / 2);
          padding-right: calc((100vw - 750px - 0.5rem) / 2);
        }
      `}
    >
      <Logo href="#header">
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
              @media (max-width: 371px) {
                font-size: 2rem;
              }
              @media (max-width: 332px) {
                font-size: 1.8rem;
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
              @media (max-width: 361px) {
                font-size: 1.6rem;
              }
              @media (max-width: 332px) {
                font-size: 1.4rem;
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
          href="https://goo.gl/maps/Sj7X3iGNqPTfDBPU7"
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
            href="https://www.instagram.com/dentaldrsanchez/"
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
