import React from "react";
import { css } from "styled-components";
import Image from "./image";

const About = () => (
  <section
    id="about"
    css={css`
      height: 600px;
      margin-bottom: 2rem;
      @media (max-width: 550px) {
        height: 450px;
      }
      @media (max-width: 340px) {
        height: 350px;
      }
    `}
  >
    <div
      css={css`
        background-color: #656dba;
        border-width: 0;
        display: block;
        margin: 0;
        padding: 1rem;
        text-align: center;
        @media (max-width: 371px) {
          padding: 0.6rem;
        }
      `}
    >
      <h2
        css={css`
          color: #fff;
          font-size: 2rem;
          letter-spacing: 1px;
          line-height: 1.2;
          margin: 0;
          @media (max-width: 371px) {
            font-size: 1.8rem;
          }
          @media (max-width: 332px) {
            font-size: 1.6rem;
          }
        `}
      >
        Conócenos!
      </h2>
    </div>
    <div
      css={css`
        display: flex;
        margin: 1rem;
        justify-content: space-around;
        align-items: center;
      `}
    >
      <div
        css={css`
          width: 40%;
          padding: 0.5rem;
        `}
      >
        <h1
          css={css`
            @media (max-width: 550px) {
              font-size: 1.8rem;
            }
          `}
        >
          Dra. Claritza Sanchez.
        </h1>
        <p
          css={css`
            font-size: 1.5rem;
            @media (max-width: 550px) {
              font-size: 0.8rem;
            }
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
