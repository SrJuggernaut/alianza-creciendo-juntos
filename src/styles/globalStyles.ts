import { css } from '@emotion/react'

export default css`
  * {
    box-sizing: border-box;
  }
  body {
    margin: 0;
    padding: 0;
    background-color: #1D1D1B;
    color: #fff;
  }
  html {
    font-size: 62.5%;
  }
  h1, h2, h3, h4, h5, h6 {
    font-weight: normal;
    text-transform: uppercase;
  }
  h1 {
    font-size: 40px;
    font-family: "Kiona Regular";
  }
  h2, h3, h4, h5, h6 {
    font-family: "Futura Condensed Bold";
  }
  h2 {
    font-size: 32px;
  }
  h3 {
    font-size: 28px;
  }
  h4 {
    font-size: 24px;
  }
  h5 {
    font-size: 20px;
  }
  h6 {
    font-size: 16px;
  }
  p {
    font-size: 16px;
    font-family: "Futura Light Regular";
  }
`
