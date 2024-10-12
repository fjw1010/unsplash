import { createGlobalStyle } from "styled-components";

export const ResetCSS = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  html, body {
    height: 100%;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    scroll-behavior: smooth;
  }

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    font-size: 16px;
    color: #333;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  button, input, select, textarea {
    font: inherit;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ul, ol {
    list-style: none;
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Prevents animations and transitions during the first load */
  @keyframes none { 0% { opacity: 1; } 100% { opacity: 1; } }
  *:where(:not(:root)) {
    animation-duration: 0.001ms !important;
    animation-name: none !important;
    transition-duration: 0.001ms !important;
  }
`;
