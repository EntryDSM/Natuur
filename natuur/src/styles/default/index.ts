import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

import MainBackground from "../../assets/MainPage/main_background.svg";

export const GlobalStyle: GlobalStyleComponent<
  {},
  DefaultTheme
> = createGlobalStyle`
  @import 'https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css';

  /* View Container */
  .main-page {
    background-image: url(${MainBackground});
    background-size: cover;
    background-position: center center;

    & > div:first-child {
      box-shadow: none;
    }
  }

  /* css initialize */
  html, body {
    width: 100%;
    height: 100%;
    min-width: 1180px;
    font-family: 'NanumSquareRound', sans-serif;
  }

  input[type=password] {
    font-family: sans-serif;
  }
  input:focus{
    outline: none;
  }

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
  }

  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }

  ol, ul {
    list-style: none;
  }

  blockquote, q {
    quotes: none;
  }

  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }

  a {
    &:link{
      color: #000;
      text-decoration: none;
    }
    &:visited{
      color: #000;
      text-decoration: none;
    }
  }

  .rotate{
    transform: rotate(180deg);
  }
  
  .btn{
    display: inline-block;
    transition: 0.5s;
  }
`;
