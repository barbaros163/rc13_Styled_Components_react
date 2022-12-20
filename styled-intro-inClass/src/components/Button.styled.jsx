import styled from "styled-components";

export const Button = styled.button`
  /* background-color: hotpink; */
  /* color: white; */
  background-color: ${(props) => (props.primary ? "white" : "purple")};
  color: ${({ primary }) => (primary ? "purple" : "white")};
  cursor: pointer;
  padding: 1rem 2rem;
  border-radius: 0.5rem;
  border-color: purple;
  font-size: 1.1rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  &:hover {
    transform: scale(0.97);
  }
`;
