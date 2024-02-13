import CustomSwiper from "@/components/CustomSwiper/CustomSwiper";
import { register } from "swiper/element/bundle";
import styled from "@emotion/styled";
register();

import data from "../../data.json";

export const Logo = styled.div`
  position: absolute;
  top: 3%;
  left: 9%;
  width: 220px;
  height: 60px;
  background-image: url("/images/logo.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  z-index: 30;
`;

export default function Home() {
  return (
    <div>
      <Logo />
      <CustomSwiper cards={data.cards} />
    </div>
  );
}
