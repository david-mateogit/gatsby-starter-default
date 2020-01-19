import React from "react";
import styled, { css } from "styled-components";
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
  <section>
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
