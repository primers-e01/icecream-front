import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  color : ${props => props.theme.mainBrandBlack};
  }

  body {
    font-family: -apple-system, "system-ui", Roboto, AppleSDGothicNeo-Regular, NanumBarunGothic, NanumGothic, 나눔고딕, "Segoe UI", Helveica, Arial, "Malgun Gothic", Dotum, sans-serif;  
  }

  a {
    color: inherit;
    text-decoration: none;
  }
`;

export default GlobalStyle;
