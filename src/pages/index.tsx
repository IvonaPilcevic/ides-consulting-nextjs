import CustomSwiper from "@/components/CustomSwiper/CustomSwiper";
import { register } from "swiper/element/bundle";
register();

import data from "../../data.json";
import styled from "@emotion/styled";

export const Logo = styled.div`
  position: absolute;
  top: 5%;
  left: 7%;
  width: 220px;
  height: 60px;
  background-image: url("/images/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 30;
`;

export const Container = styled.div`
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-image: url("/images/hero.jpg");
`;

export default function Home() {
  return (
    <Container>
      <Logo />
      <CustomSwiper cards={data.cards} />
    </Container>
  );
}
