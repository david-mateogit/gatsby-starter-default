import React from "react";
import { css } from "styled-components";

const Intro = () => (
  <section
    css={css`
      text-align: center;
    `}
  >
    <h2
      css={css`
        font-size: 3.8rem;
        margin: 0 1rem;
        padding: 1rem;
        @media (max-width: 332px) {
          font-size: 2rem;
        }
        @media (max-width: 400px) {
          font-size: 2.5rem;
        }
      `}
    >
      Restaurando sonrisas por mas de 10 años.
    </h2>
    <p
      css={css`
        font-size: 1.5rem;
        padding: 1rem;
        margin: 0 1.5rem;
      `}
    >
      Esperamos brindar a nuestros pacientes el servicio y la atención que
      merecen, personalizando el tratamiento específicamente para satisfacer las
      necesidades del individuo. Dejamos suficiente tiempo en cada cita para que
      podamos abordar cualquier pregunta o inquietud que pueda tener.
    </p>
  </section>
);

export default Intro;
