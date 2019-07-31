import styled from "styled-components";

export const ButtonText = styled.span`
  line-height: 1.31;
`;

interface ButtonProps {
  width: number;
  isDisable?: boolean;
  marginLeft?: number;
}
export const Button = styled.button<ButtonProps>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${props => `${props.width}px`};
  height: 41px;
  border-radius: 5px;
  border: ${props =>
    props.isDisable
      ? "solid 1px #cccccc"
      : "solid 1px rgba(121, 194, 202, 0.5)"};
  background-color: ${props => (props.isDisable ? "#fcfcfc" : "#f8fcfd")};
  font-size: 16px;
  margin-left: ${props => `${props.marginLeft}px`};

  ${ButtonText} {
    color: ${props => (props.isDisable ? "rgba(0,0,0,0.3)" : "#79c2ca")};
  }
`;
