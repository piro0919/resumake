import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    -webkit-overflow-scrolling: touch;
    overflow: hidden !important;
    -ms-text-size-adjust: 100%;

    body {
      background-repeat: repeat;
      font-size: 1.4rem;
      line-height: 1.2;
      overflow: hidden;

      * {
        appearance: none;
      }

      a {
        color: inherit;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      button,
      input,
      textarea {
        border-radius: 0;
      }

      iframe,
      img {
        vertical-align: bottom;
      }
    
      ul {
        list-style: none;
      }
    }
  }
`;
