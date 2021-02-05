import React from "react";
import styled from "styled-components";

const SocialWrapper = styled.div`
    height: 100%;
    text-align: center;
    padding: 0 2rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `;
  const HireSomeone = styled.h2`
    color: red;
  `;

const Social = () => {
  
  return (
    <SocialWrapper>
      <h1>Link to social networks will be alive after creating accounts...</h1>
      <HireSomeone>
        We need to hire someone who will create, update and promote our company
        on social networks
      </HireSomeone>
    </SocialWrapper>
  );
};

export default Social;
