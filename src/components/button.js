import React from "react";
import styled, { css } from "styled-components";

const ButtonStyled = styled.button`
  background: white;
  border-radius: 3px;
  border: 2px solid #d89cf6;
  color: #916dd5;
  margin: 0.5em 0.5em;
  padding: 0.25em 1em;
  &:last-of-type {
    margin-right: 0;
  }

  ${props =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}
`;

const Button = ({ children }) => <ButtonStyled>{children}</ButtonStyled>;

export default Button;
