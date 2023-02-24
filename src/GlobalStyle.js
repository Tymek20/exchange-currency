import { createGlobalStyle } from "styled-components";
import background from "./background.png";

export const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        }

        *, ::after, ::before {
        box-sizing: inherit;
        }

    body {
        font-size: x-large;
        font-family: 'Open Sans', sans-serif;
        line-height: 1.5;
        background-image: url("${background}");
        background-position: center;
        background-size: 130%;
    }
`;