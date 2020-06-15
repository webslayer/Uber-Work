import { css, Global } from "@emotion/core";

export const globalStyles = (
  <Global
    styles={css`
      body {
        margin: 0;
        min-height: 100%;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-color: #edf2f7;
      }
    `}
  />
);
