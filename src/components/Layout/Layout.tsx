import styled from "@emotion/styled";
import React from "react";

const StyledLayout = styled.div`
    width: 100%;
    height: 100vh;
    max-heightL 100vh;
    overflow: hidden;
    background: lavender;
`;

const Layout: React.FC<{ children: any }> = ({ children }) => {
  return <StyledLayout>{children}</StyledLayout>;
};

export default Layout;
