// Lib
import styled, { createGlobalStyle } from 'styled-components'

export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`

const GlobalStyle = createGlobalStyle`

  :root {
    --black: #212529;
    --white: #ffffff;
    --grey: #ced4da;
    --darkBlue: #343a40;
    --f-family: Open-Sans, Helvetica, Sans-Serif
  }
  * {
    box-sizing: border-box;
  }
  html {
    box-sizing: border-box;
    font-size: 100%;
  }
  
  *, *:before, *:after {
    box-sizing: inherit;
  }
  
  body, h1, h2, h3, h4, h5, h6, p, ol, ul {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }
  
  ol, ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  body {
    background-color: var(--white);
    margin: 0;
    padding: 0;
    font-family: var(--f-family)
  }
`

export default GlobalStyle
