import styled from "@emotion/styled";

export const StyledSlideThumb = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgb(16, 16, 16),
    rgb(24, 24, 24),
    rgba(24, 24, 24, 0.5)
  );
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  position: relative;

  &:hover {
    cursor: pointer;
  }

  @media screen and (max-width: 1000px) {
    display: grid;
    grid-template-rows: 25px 20px auto;
    justify-content: center;
    align-items: center;
  }
`;

export const ThumbSlideText = styled.p`
  text-align: left;
  color: white;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 13px;
  margin-top: 20px;

  @media screen and (max-width: 1000px) {
    font-size: 10px;
    margin-top: 0;
  }
`;

export const ThumbSlideLabel = styled.p`
  text-align: left;
  color: white;
  font-weight: light;
  text-transform: uppercase;
  font-size: 10px;
  word-spacing: 100vw;
  @media screen and (max-width: 1000px) {
    font-size: 8px;
    margin-top: 0px;
  }
`;

export const ThumbsLogo = styled.div<{ img: string }>`
  position: absolute;
  top: 10px;
  right: 10px;
  width: 50%;
  height: 25px;
  background-image: url(${(props) => `${props.img}`});
  background-repeat: no-repeat;
  background-position: right bottom;
  background-size: contain;
  border: none;

  @media screen and (max-width: 1000px) {
    position: relative;
    top: 0;
    right: 0;
    background-position: top center;
  }
`;

export const StyledSlide = styled.div<{ background: string }>`
  width: 100%;
  height: 100%;
  max-height: 100%;
  overflow: hidden;
  position: relative;
  background-image: url(${(props) => `${props.background}`});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
export const SlideContent = styled.div`
  position: absolute;
  top: 45%;
  left: 30%;
  transform: translate(-50%, -50%);
  max-width: 41%;
  text-align: left;

  @media screen and (max-width: 1000px) {
    left: 50%;
    max-width: 100%;
    width: 90%;
    display: grid;
  }
`;
export const SlideTitle = styled.p`
  color: white;
  text-transform: uppercase;
  font-size: 42px;
  text-align: left;
  font-weight: 700;
  @media screen and (max-width: 1000px) {
    font-size: 20px;
  }
`;

export const SlideLogo = styled.div<{ img: string }>`
  height: 30px;
  width: 50px;
  background-image: url(${(props) => `${props.img}`});
  background-repeat: no-repeat;
  background-position: center left;
  background-size: contain;
  width: 200px;
  height: 60px;
  margin-bottom: 15px;

  @media screen and (max-width: 1000px) {
    margin-bottom: 30px;
  }
`;
export const SlideText = styled.p`
  color: white;
  text-align: left;
  font-size: 22px;
  font-weight: 400;
  margin-top: 20px;
  @media screen and (max-width: 1000px) {
    font-size: 15px;
  }
`;

export const SlideButton = styled.button`
  background: rgba(0, 0, 0, 0.5);
  border: 1.5px solid purple;
  border-radius: 3px;
  text-align: center;
  margin-top: 20px;
  color: white;
  font-size: 17px;
  padding: 15px 45px;
  font-weight: normal;
  transition: all 0.3s ease-in;
  @media screen and (max-width: 1000px) {
    font-size: 10px;
    padding: 10px 25px;
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.7);
    transition: all 0.3s ease-in;
  }
`;
