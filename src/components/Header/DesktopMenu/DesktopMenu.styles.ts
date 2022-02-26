import styled from "styled-components";


export const DesktopDisplay = styled.div`
    display: none;

    @media screen and (min-width: 900px){
        background: transparent;
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        z-index: 1;
        padding: 2rem 2rem;
        width: 100%;
    }
`

export const Logo = styled.a`
width: 30px;
`

export const NavRight = styled.div`
    display: flex;
`