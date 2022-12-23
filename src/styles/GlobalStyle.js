import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  body {
    margin-top: 100px;
  }

  * {
  box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
