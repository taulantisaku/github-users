import styled from "styled-components";

export const Button = styled.button`
  background-color: ${(props) => props.color || "#eee"};
  border-radius: 3px;
  border: none;
  color: white;
`;

export const Link = styled.a`
  text-decoration: none;
  background-color: red;
`;






