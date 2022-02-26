import styled, { css } from "styled-components";

export const MobileDisplay = styled.div`
    display: block;
    @media screen and (min-width: 900px){
        display: none; 
    }
`

export const NavHeader = styled.div`
    background-color: transparent;
    display: flex;
    padding: 2rem 2rem 1rem;
    z-index: 2;
    position: relative;
    justify-content: space-between;
    align-items: center;
`

export const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    text-align: center;
    width: 100%;
    height: 100vh;
    position: fixed;
    top: 0;
    padding-top: 4.5rem;
    z-index: 1;
    font-size: var(--font-sixteen);
    //transform: translateY(0);
    transition: all 0.5s ease 0s;
    justify-content: space-between;
    color: var(--black-color);

    @media screen and (min-width: 900px){
        display: none; 
    }
`

export const Active = styled.div`
    //transform: translateY(-38.5rem);
    top: -38.5rem;
`

export const Logo = styled.a`
    width: 30px;
`

export const NavBarToggle = styled.div`
    cursor: pointer;
`

export const Bone = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "open":
                return css`
                    transform: translateY(5px) rotate(45deg);
                `
            default:
                return css`
                    width: 25px;
                    height: 3px;
                    margin: 4px;
                    background: var(--black-color);
                    transition: all 0.4s ease 0s;
                `
        }
    }}
    
`

export const Btwo = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "open":
                return css`
                    opacity: 0;
                `
            default:
                return css`
                    width: 25px;
                    height: 3px;
                    margin: 4px;
                    background: var(--black-color);
                    transition: all 0.4s ease 0s;
                `
        }
    }}
`
export const Bthree = styled.div`
    ${(props) => {
        switch (props.$mode) {
            case "open":
                return css`
                    transform: translateY(-8.75px) rotate(-45deg);
                `
            default:
                return css`
                    width: 25px;
                    height: 3px;
                    margin: 4px;
                    background: var(--black-color);
                    transition: all 0.4s ease 0s;
                `
        }
    }}
`

export const Change = styled(Bone)`
    display: block;
    background: var(--black-color);
    cursor: pointer;
`


// export const Bone = styled(Change)`
//     transform: translateY(5px) rotate(45deg);
// `

// export const Btwo = styled(Change)`
//     opacity: 0;
// `

// export const Bthree = styled(Change)`
//     transform: translateY(-8.75px) rotate(-45deg);
//`

export const NavItems = styled.ul`
    margin: 2rem 2rem 0;
    text-align: center;

    @media screen and (min-width: 900px){
        display: flex;
    }
`

export const NavList = styled.li`
    padding-bottom: 2rem;
    font-weight: 500;

    @media screen and (min-width: 900px){
        padding: 0 2rem;
    }
`

export const NavLink = styled.a`
    text-transform: uppercase;
    color: var(--black-color);

    :hover, :focus{
        color: var(--black-color);
    }

    @media screen and (min-width: 900px){
        font-size: var(--font-twelve);
        :hover, :focus{
            color: var(--red-color);
        }
    }
`
