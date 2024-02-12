import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  background: transparent;
  height: 100%;
  overflow: scroll;
  border-right: 1px solid rgba(255, 255, 255, 0.1);
  -ms-overflow-style: none;
  scrollbar-width: none;
  &::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 1000px) {
    display: none;
  }
`;

export const SidebarTitle = styled.p`
  color: white;
  text-align: left;
  margin-top: 10px;
  margin-left: 10px;
  margin-bottom: 80px;
  font-weight: 300;
  font-size: 14px;
  letter-spacing: 3px;
  transition: all 0.3s ease-in;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    text-align: center;
  }
`;

export const SidebarList = styled.p`
  color: rgba(255, 255, 255, 0.8);
  font-size: 16px;
  margin: 20px;
  font-weight: 600;
  transition: ease-in 0.3s;

  &:hover {
    color: white;
    transition: ease-in 0.3s;
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    padding: 30px;
    margin: 0;
    color: white;
    font-weight: 400;
  }
`;

export const Separator = styled.hr`
  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MobileSidebarContainer = styled.div`
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
  z-index: 70;
  margin: auto;
  text-align: center;
`;

export const CloseIcon = styled.div`
  width: 15px;
  height: 15px;
  position: absolute;
  top: 15px;
  right: 15px;
  background-image: url("/images/x.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.6;

  &:hover {
    cursor: pointer;
  }
`;
