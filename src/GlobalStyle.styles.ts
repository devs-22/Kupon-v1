import { createGlobalStyle } from "styled-components"

createGlobalStyle `
    @font-face {
        font-family: 'cabinetgrotesk';
        src: url('../public/assets/Cabinet\ grotesk/cabinetgrotesk-regulaer-webfont-woff2') format('woff2')
            url('../public/assets/Cabinet\ grotesk/cabinetgrotesk-regulaer-webfont-woff') format('woff');
    }

    :root {

        /* Colors */
        --white-color: #FAFAFA;
        --black-color: #000000;
        --grey-color: #DADADA;
        --dark-grey-color: #8a8a8e80;
        --light-blue-color: rgba(135, 190, 228, 0.1);
        --text-blue-color: #74A6C8;
        --blue-color: #025CE4;
      
        /* FontStyle*/
        --fontOne: 'cabinetgrotesk';
        
      
        /* Font Sizes */
        --font-seventyTwo: 2rem;
        --font-fourtyTwo: 2rem;
        --font-twentyFour: 1.25rem;
        --font-eighteen: 1rem;
        --font-sixteen: .8725rem;
        --font-fourteen: .88rem;
        --font-twelve: .75rem;
    }
      
    @media screen and (min-width:900px) {
        :root {
          --font-seventyTwo: 4.5rem;
          --font-fourtyTwo: 2.625rem;
          --font-twentyFour: 1.5rem;
          --font-eighteen: 1.125rem;
          --font-sixteen: 1rem;
          --font-fourteen: .88rem;
          --font-twelve: .75rem;
        }
    }

    *,
        ::before,
        ::after {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
    }

    html {
        scroll-behavior: smooth;
    }

    body {
        max-width: 1440px;
        height: 100vh;
        background-color: var(--white-color);
        font-family: var(--fontOne);
        color: var(--black-color);
        letter-spacing: 1px;
    }
      
    p, h1, h2, h3,
    h4, h5, h6{
        padding: 0;
        margin: 0;
    }
      
    p {
        font-size: var(--font-sixteen);
        line-height: 1.5rem;
        color: var(--text-pri-color);
    }
      
    h1 {
        font-size: var(--font-seventyTwo);
        line-height: 3rem;
        font-weight: 700;
        letter-spacing: 1px;
        color: var(--black-color);
    }
      
    h2 {
        font-size: var(--font-fourtyTwo);
        line-height: 2rem;
        font-weight: 700;
    }
      
    h3 {
        font-size: var(--font-twentyFour);
        line-height: 2rem;
        font-weight: 600;
    }
      
    h4 {
        font-size: var(--font-eighteen);
        line-height: 1.5rem;
        font-weight: 600;
    }
      
    h5 {
        font-size: var(--font-fourteen);
        font-weight: 600;
    }
      
    h6 {
        font-size: var(--font-twelve);
        line-height: 1.5rem;
        font-weight: 500;
    }
      
    a {
        text-decoration: none;
        color: inherit;
        font-family: var(--fontOne);
        font-weight: 600;
        font-size: var(--font-fourteen);
    }
      
    ul li {
        list-style: none;
    }
      
    img {
        border: none;
        max-width: 100%;
        background-position: center;
        background-size: cover;
    }

    @media screen and (min-width:900px) {
        h1{
            line-height: 4rem;
        }
    }
`
