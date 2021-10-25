import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');

    html {
        box-sizing: border-box;
    }

    *,*::after, *::before {
        box-sizing: inherit;
    }

    body{
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    }

    align-items, button{
        font-family: 'Montserrat', Arial, Helvetica, sans-serif;
    }


`;