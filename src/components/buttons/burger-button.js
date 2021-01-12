import React from "react";
import styled from "styled-components";

const Button = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 24px;
  width: 30px;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  box-sizing: border-box;
  &:focus {
    outline: none;
  }
`;

const ButtonLine = styled.div`
  width: 30px;
  height: 2px;
  background: #fff;
`;

const BurgerButton = (props) => {
  return (
    <Button onClick={props.click}>
      <ButtonLine />
      <ButtonLine />
      <ButtonLine />
    </Button>
  );
};

export default BurgerButton;
