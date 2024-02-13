import React from "react";
import {
  SlideButton,
  SlideContent,
  SlideLogo,
  SlideText,
  SlideTitle,
  StyledSlide,
  StyledSlideThumb,
  ThumbSlideLabel,
  ThumbSlideText,
  ThumbsLogo,
} from "./SwiperStyle";
import Link from "next/link";

export const SwiperSlideThumb: React.FC<{
  label: string;
  text: string;
  img: string;
}> = ({ label, text, img }) => {
  return (
    <StyledSlideThumb>
      <ThumbsLogo img={img} />
      <ThumbSlideLabel>{label}</ThumbSlideLabel>
      <ThumbSlideText>{text}</ThumbSlideText>
    </StyledSlideThumb>
  );
};

export const SwiperSlide: React.FC<{
  title: string;
  text: string;
  buttonText: string;
  slug: string;
  img: string;
  background: string;
}> = ({ title, text, buttonText, slug, img, background }) => {
  return (
    <StyledSlide background={background}>
      <SlideContent>
        <SlideLogo img={img} />
        <SlideTitle>{title}</SlideTitle>
        <SlideText>{text}</SlideText>
        <Link href={`/${slug}`}>
          <SlideButton>{buttonText} &#8594;</SlideButton>
        </Link>
      </SlideContent>
    </StyledSlide>
  );
};
