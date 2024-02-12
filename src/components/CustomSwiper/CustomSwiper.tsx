//@ts-nocheck
import React, { useRef } from "react";
import { SwiperSlide, SwiperSlideThumb } from "./SwiperSlide";
import { useWindowSize } from "usehooks-ts";

const CustomSwiper = ({ cards }) => {
  const size = useWindowSize();
  const swiperRef = useRef(null);

  const [slidesPerView, setSlidesPerView] = React.useState(4);
  const [spaceBetween, setSpaceBetween] = React.useState(20);

  React.useEffect(() => {
    if (size?.width <= 1250) {
      setSlidesPerView(4);
      setSpaceBetween(15);
    }
    if (size?.width <= 1000) {
      setSlidesPerView(3);
      setSpaceBetween(5);
    }
  }, [size?.width]);

  React.useEffect(() => {
    const swiperContainer = swiperRef.current;
    const params = {
      navigation: true,
      injectStyles: [
        `
          .swiper-button-next,
          .swiper-button-prev {
            background: linear-gradient(
              to bottom,
              rgb(16, 16, 16),
              rgb(24, 24, 24),
              rgba(24, 24, 24, 0.5)
            );
           
            color: white;
            width: 30px;
            height: 30px;
            padding: 10px;

            @media screen and (max-width: 1000px) {
              display: none;
            }
          }
      `,
      ],
    };

    Object.assign(swiperContainer, params);
    swiperContainer.initialize();
  }, []);

  return (
    <>
      <swiper-container
        class="mySwiper"
        thumbs-swiper=".mySwiper2"
        space-between="0"
        loop="true"
        init="false"
        ref={swiperRef}
      >
        {cards.map((card) => (
          <swiper-slide key={card.id}>
            <SwiperSlide
              title={card.title}
              text={card.text}
              buttonText={card.button}
              slug={card.slug}
              img={card.image}
            />
          </swiper-slide>
        ))}
      </swiper-container>

      <swiper-container
        class="mySwiper2"
        space-between={spaceBetween}
        slides-per-view={slidesPerView}
        loop="true"
        watch-slides-progress="true"
        free-mode="true"
      >
        {cards.map((card) => (
          <swiper-slide key={card.id}>
            <SwiperSlideThumb
              img={card.image}
              text={card.title}
              label={card.label}
            />
          </swiper-slide>
        ))}
      </swiper-container>
    </>
  );
};

export default CustomSwiper;
