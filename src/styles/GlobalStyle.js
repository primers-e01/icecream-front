import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  color : ${props => props.theme.mainBrandBlack};
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
