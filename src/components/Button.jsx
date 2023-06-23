import React from "react";
import styled, { css } from "styled-components";

const PRIMARY_COLOR = "#55efc4";
const NEGATIVE_COLOR = "#fab1a0";
const BLACK = "#000";
const NEGATIVE_COLOR2 = "#d63031";

const StyledButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
  border: 0px;
  border-radius: 8px;
  cursor: pointer;

  color: ${(props) => (props.color === "primary" ? BLACK : NEGATIVE_COLOR2)};

  background-color: ${(props) =>
    props.color === "primary" ? PRIMARY_COLOR : NEGATIVE_COLOR};

  ${(props) =>
    props.size === "lg" &&
    css`
      width: 200px;
      height: 50px;
    `}

  ${(props) =>
    props.size === "md" &&
    css`
      width: 130px;
      height: 45px;
    `}
    ${(props) =>
    props.size === "sm" &&
    css`
      width: 100px;
      height: 40px;
    `}

    ${(props) =>
    props.outline === "true" &&
    css`
      font-weight: 700;
      background-color: #fff;
      border: 3px solid
        ${(props) =>
          props.color === "primary" ? PRIMARY_COLOR : NEGATIVE_COLOR};
    `}
`;

export default function Button({ children, color, size, outline }) {
  return (
    <StyledButton color={color} size={size} outline={outline}>
      {children}
    </StyledButton>
  );
}
