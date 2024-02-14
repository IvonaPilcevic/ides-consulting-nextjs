import React from "react";
import { MenuItem, MobileMenuContainer } from "./MenuStyle";
import { CloseIcon } from "../Sidebar/SidebarStyle";
import Link from "next/link";

const MobileMenu: React.FC<{ toggleMenu: any; menu: any }> = ({
  toggleMenu,
  menu,
}) => {
  return (
    <MobileMenuContainer>
      <CloseIcon onClick={toggleMenu} />
      {menu.map((item: any, i: number) => (
        <MenuItem key={i} onClick={toggleMenu}>
          <Link href={item.href}>{item.label}</Link>
        </MenuItem>
      ))}
    </MobileMenuContainer>
  );
};

export default MobileMenu;
