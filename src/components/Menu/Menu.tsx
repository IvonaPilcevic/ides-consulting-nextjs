import React from "react";
import { MenuContainer, MenuItem } from "./MenuStyle";
import Link from "next/link";
import data from "../../../data.json";
import { Hamburger } from "../Services/ServicesStyle";
import MobileMenu from "./MobileMenu";
import { useRouter } from "next/router";

const Menu = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prevState) => !prevState);
  };

  const router = useRouter();
  if (router.pathname === "/[slug]") {
    return <></>;
  }

  return (
    <>
      <MenuContainer>
        {data?.menu?.map((item, i) => (
          <MenuItem key={i}>
            <Link href={item.href}>{item.label}</Link>
          </MenuItem>
        ))}
      </MenuContainer>
      <Hamburger onClick={toggleMobileMenu} />
      {isMobileMenuOpen && (
        <MobileMenu toggleMenu={toggleMobileMenu} menu={data?.menu} />
      )}
    </>
  );
};

export default Menu;
