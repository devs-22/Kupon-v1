import styled from "styled-components";


// interface ButtonProps {
//     theme?: ThemeInterface;
//     borders?: boolean;
//     className?: string;
// }

export const ButtonSmall = styled.button`
    padding: 16px 22px;
    width: 156px;
    background: var(--button-color);
    border: none;
    border-radius: 3px;
    color: var(--white-color);
    font-size: 14px;
    font-weight: 500;
    font-family: var(--fontTwo);
    margin-right: 5%;
    margin-left: 5%;
    padding: .9rem;
    cursor: pointer;
    //width: ${props => props.theme.main};

    &:hover{
        background: var(--grey-color); 
        
    }
`

export const ButtnoWhiteSmall = styled(ButtonSmall)`
    background: none;
    border: 1px solid var(--black-color);
    color: var(--black-color);
`

export const ButtonLarge = styled(ButtonSmall)`
    width: 496px;
    background: var(--blue-color);
`

export const ButtonWhiteLarge = styled(ButtonSmall)`
    width: 496px;
    background: none;
    border: 1px solid var(--black-color);
    color: var(--black-color);
`