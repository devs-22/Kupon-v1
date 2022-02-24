import { createGlobalStyle } from "styled-components"

createGlobalStyle `
    @font-face {
        font-family: 'cabinetgrotesk';
        src: url('../public/assets/Cabinet\ grotesk/cabinetgrotesk-regulaer-webfont-woff2') format('woff2')
            url('../public/assets/Cabinet\ grotesk/cabinetgrotesk-regulaer-webfont-woff') format('woff');
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
        font-family: var(--fontTwo);
        color: var(--black-color);
        letter-spacing: 1px;
    }
      
    p, h1, h2, h3,
    h4, h5, h6{
        padding: 0;
        margin: 0;
    }
      
    h2, h3,
    h4, h5, h6 {
        color: var(--head-pri-color);
        font-family: var(--fontTwo);
    }
      
    p {
        font-size: var(--font-sixteen);
        line-height: 1.5rem;
        color: var(--text-pri-color);
    }
      
    h1 {
        font-size: var(--font-fourtyTwo);
        font-family: var(--fontOne);
        line-height: 4rem;
        font-weight: 500;
        letter-spacing: 1px;
        color: var(--purple-color);
    }
      
    h2 {
        font-size: var(--font-twentyFour);
        line-height: 2rem;
        font-weight: 400;
    }
      
    h3 {
        font-size: var(--font-sixteen);
        line-height: 2rem;
        font-weight: 400;
    }
      
    h4 {
        font-size: var(--font-fourteen);
        line-height: 1.5rem;
        font-weight: 500;
    }
      
    h5 {
        font-size: var(--font-twelve);
        font-weight: 400;
    }
      
    h6 {
        font-size: var(--font-eleven);
        line-height: 1.5rem;
        font-weight: 400;
    }
      
    a {
        text-decoration: none;
        color: inherit;
        font-family: var(--fontTwo);
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
`
