import { createGlobalStyle, css } from "styled-components";
import React from "react";
import PropTypes from "prop-types";

import Header from "./header";

const GlobalStyle = createGlobalStyle`
  * {
      box-sizing: border-box;
      margin: 0;
    }
    * + * {
      margin-top: 1rem;
    }
    html,
    body {
      margin: 0;
      color: #555;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto,
        Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
      font-size: 14px;
      line-height: 1.4;

      @media (min-width: calc(550px + 10vw)) {
        font-size: 18px;
      }

      /* remove margin for the main div that Gatsby mounts into */
      > div {
        margin-top: 0;
      }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      color: #222;
      line-height: 1.1;
      + * {
        margin-top: 0.5rem;
      }
    }

    strong {
      color: #222;
    }

    li {
      margin-top: 0.25rem;
    }

`;

const Layout = ({ children }) => (
  <>
    <GlobalStyle />
    <Header />
    <div
      css={css`
        margin: 0 auto;
        max-width: 960px;
        padding: 0;
      `}
    >
      <main
        css={css`
          margin: 0 auto;
          max-width: 100vw;
        `}
      >
        {children}
      </main>
      <footer>
        © {new Date().getFullYear()}, Built with
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer>
    </div>
  </>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
