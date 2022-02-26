import styled from "styled-components";

export const Button = styled.button<{
  background: string;
  color: string;
  hover: string;
  width: string;
  border: string;
  marginRight: string;
}>`
  padding: 16px 22px;
  width: ${(props) => props.width};
  background-color: ${(props) => props.background};
  border: ${(props) => props.border};
  border-radius: 10px;
  color: ${(props) => props.color};
  margin-right: ${(props) => props.marginRight};
  font-size: 16px;
  font-weight: 700;
  font-family: "cabinetgrotesk";
  padding: 0.9rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.hover};
  }
`;
