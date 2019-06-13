import {
  createGlobalStyle,
  GlobalStyleComponent,
  DefaultTheme
} from "styled-components";

import MainBackground from "../assets/MainPage/main_background.svg";

const GlobalStyle: GlobalStyleComponent<{}, DefaultTheme> = createGlobalStyle`
  @import 'https://cdn.rawgit.com/innks/NanumSquareRound/master/nanumsquareround.min.css';

  /* View Container */
  .main-page {
    background-image: url(${MainBackground});
    background-size: cover;
    background-position: center center;
    display: flex;
    flex-direction: column;

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

  input {
    &:-webkit-autofill {
      box-shadow: 0 0 0 1000px rgba(255, 255, 255, 0.8) inset;
    }
    border: solid 1px rgba(121, 194, 202, 0.5);
    border-radius: 5px;

    &[type=password] {
    font-family: sans-serif;
    }

    &:focus {
      outline: none;
    }
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
    font-size: 0;
    font-weight: normal;
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

export default GlobalStyle;
