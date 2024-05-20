import styled, { css } from "styled-components";
import { ButtonVariant } from "./Button";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'green'
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 100px;
  height: 40px;
  cursor: pointer;
  border-radius: 8px;
  border: 0;
  margin: 1rem;

  color: ${props => props.theme.white};
  background-color: ${props => props.theme.success};

  /* ${props => {
    return css`
      background-color: ${buttonVariants[props.variant]}
    `
  }} */
`