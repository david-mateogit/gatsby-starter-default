import React from "react";
import { css } from "styled-components";
import ServiceBox from "./service-box";

const serviceList = [
  "Odontología Cosmética",
  "Implantes",
  "Chequeo General",
  "Brackets invisibles",
  "Tratamiento Periodontal",
  "Odontología preventiva",
];

const Services = () => (
  <section id="services">
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
        Servicios y Procedimientos
      </h2>
    </div>
    <ul
      css={css`
        list-style: none;
        display: grid;

        /* define the number of grid columns */
        grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
        grid-gap: 10px;
        justify-items: center;
        margin: 0;
      `}
    >
      {serviceList.map(service => (
        <li key={service}>
          <ServiceBox service={service} />{" "}
        </li>
      ))}
    </ul>
  </section>
);

export default Services;
