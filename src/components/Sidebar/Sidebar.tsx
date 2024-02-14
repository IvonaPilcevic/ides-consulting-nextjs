import React from "react";
import {
  CloseIcon,
  MobileSidebarContainer,
  Separator,
  SidebarContainer,
  SidebarList,
  SidebarTitle,
} from "./SidebarStyle";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import data from "../../../data.json";
import Link from "next/link";

export const Sidebar: React.FC<{ list: any; setActiveItemHandler: any }> = ({
  list,
  setActiveItemHandler,
}) => {
  const router = useRouter();
  return (
    <SidebarContainer>
      <SidebarTitle onClick={() => router.back()}>&#x2190; back</SidebarTitle>
      {list.map((item: any, i: number) => (
        <React.Fragment key={i}>
          <SidebarList key={item.href} onClick={() => setActiveItemHandler(i)}>
            &#x2022; &nbsp; &nbsp;{item}
          </SidebarList>
        </React.Fragment>
      ))}
    </SidebarContainer>
  );
};

export const MobileSidebar: React.FC<{
  list: any;
  setActiveItemHandler: any;
  toggleSidebar: any;
}> = ({ list, setActiveItemHandler, toggleSidebar }) => {
  const router = useRouter();
  return (
    <MobileSidebarContainer>
      <CloseIcon onClick={toggleSidebar} />
      {/* <SidebarTitle onClick={() => router.back()}>&#x2190; home</SidebarTitle> */}
      {list.map((item: any, i: number) => (
        <React.Fragment key={i}>
          <SidebarList key={item.href} onClick={() => setActiveItemHandler(i)}>
            {item}
          </SidebarList>
        </React.Fragment>
      ))}

      {data.menu.map((item, i) => (
        <React.Fragment key={i + 17}>
          <SidebarList>
            <Link href={item.href}>{item.label}</Link>
          </SidebarList>
        </React.Fragment>
      ))}
    </MobileSidebarContainer>
  );
};
