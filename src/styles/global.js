import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  * {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  }

  html {
    overflow-y: scroll;
  }

  body {
    font: 400 14px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    background-color: ${props => (props.dark ? "#3B3B3B" : "#f7f7f7")};

  }



  html, body, #___gatsby > div {
    min-height: 100vh;
    /* transition: all .2s; */
  }

  .active {
    border-bottom: 1px solid #ffcc57;
  }


  ::-webkit-scrollbar {
    width: 12px;
  }

  ::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.18);
  }

  ::-webkit-scrollbar-thumb:vertical {
    background: rgba(0, 0, 0, 0.5);
  }

  ::-webkit-scrollbar-thumb:vertical:active {
    background: rgba(0, 0, 0, 0.61);
  }

  pre::-webkit-scrollbar {
    height: 8px;
    background-color: rgba(0, 0, 0, 0.5);
  }

  pre::-webkit-scrollbar:hover {
    background-color: rgba(0, 0, 0, 0.09);
  }

  pre::-webkit-scrollbar-thumb {
    background: rgba(0, 0, 0, 0.5);
  }

  pre::-webkit-scrollbar-thumb:active {
    background: rgba(0, 0, 0, 0.5);
  }

  button {
    cursor: pointer;
  }
`

export default GlobalStyle
