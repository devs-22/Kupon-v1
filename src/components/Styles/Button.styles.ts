import styled from 'styled-components';

export const Button = styled.button<{
  backgroundColor: string;
  color: string;
  hover: string;
  width: string;
  border: string;
}>`
  padding: 16px 22px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.backgroundColor};
  border: ${(props) => props.border};
  border-radius: 10px;
  color: ${(props) => props.color};
  font-size: 16px;
  font-weight: 700;
  font-family: 'cabinetgrotesk';
  padding: 0.9rem;
  cursor: pointer;
  height: 56px;
  transition: all 300ms ease-in-out;

  &:hover {
    background: ${(props) => props.hover};
  }
`;
