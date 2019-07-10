import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  :root {
    font-size: 14px;
    @media screen and (min-width: 35em) {
      font-size: 16px;
    }
  }
  body {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    background-color: #eee;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

`;
