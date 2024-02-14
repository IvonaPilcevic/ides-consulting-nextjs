import styled from "@emotion/styled";

export const MenuContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  position: fixed;
  z-index: 80;
  top: 0;
  right: 10%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const MenuItem = styled.div`
  margin: 20px;
  color: rgba(255, 255, 255, 0.9);
  font-size: 16px;
  letter-spacing: 1.5px;
  font-weight: 400;
  font-family: "Maven Pro", sans-serif;
  transition: all 0.3s ease-in;
  z-index: 100;
  &:hover {
    color: white;
    transition: all 0.3s ease-in;
  }
`;

export const MobileMenuContainer = styled.div`
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0.9),
      rgba(0, 0, 0, 0.9)
    ),
    url("/images/hero.jpg");
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 100;
  margin: auto;
  padding-top: 15%;
  text-align: center;
`;
