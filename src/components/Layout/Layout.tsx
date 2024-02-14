import styled from "@emotion/styled";
import React from "react";
import Menu from "../Menu/Menu";

const StyledLayout = styled.div`
    width: 100%;
    height: 100vh;
    max-heightL 100vh;
    overflow: hidden;
  position: relative;
    `;

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return (
    <StyledLayout>
      <Menu />
      {children}
    </StyledLayout>
  );
};

export default Layout;
