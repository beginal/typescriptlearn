import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'

const GlobalStyle = createGlobalStyle`
${reset}
  * {
    box-sizing: border-box;
  }

  body {
  margin: 0;
  font-size: 15px;
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&family=Roboto:wght@300;400;500;700&display=swap');
    font-family: 'Roboto', 'Noto Sans KR',Arial,sans-serif;
  }
  ol, ul, li {
    list-style: none;
  }
  a {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
  
`


export default GlobalStyle