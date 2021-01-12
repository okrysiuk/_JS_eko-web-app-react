import React from "react";
import styled from "styled-components";

const SidebarShadow = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 100;
`;

const Shadow = (props) => {
  return <SidebarShadow onClick={props.click} />;
};

export default Shadow;
