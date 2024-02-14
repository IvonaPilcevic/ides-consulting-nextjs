import styled from "@emotion/styled";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
    url("/images/hero.jpg");
  background-position: center;
  background-size: cover;
  display: grid;
  grid-template-columns: 20% 80%;
  justify-content: center;
  align-items: center;
  z-index: 10;
  position: relative;
  @media screen and (max-width: 1000px) {
    display: block;
    position: relative;

    background-image: linear-gradient(
        to right,
        rgba(0, 0, 0, 1),
        rgba(0, 0, 0, 0),
        rgba(0, 0, 0, 1)
      ),
      url("/images/hero.jpg");
  }
`;
