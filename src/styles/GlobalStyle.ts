import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

declare module 'styled-components' {
  export interface DefaultTheme {
    mainBrandBlack: string;
    mainBrandGray05: string;
    mainBrandGray08: string;

    buttonActive: string;
    buttonDisabled: string;
    buttonSell: string;
    buttonBuy: string;

    globalBorderStyle: string;
    globalBoxShadow: string;

    carousel: number;
    goToTop: number;
    mainCarousel: number;
    nav: number;
    floatingPrice: number;
    alertModal: number;
    buySellTitle: number;
    mainBanner: number;
    modal: number;
  }
}

const GlobalStyle = createGlobalStyle`
  ${reset}

  * {
  box-sizing: border-box;
  color : ${({ theme }) => theme.mainBrandBlack};
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
