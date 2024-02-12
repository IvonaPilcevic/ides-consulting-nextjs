import styled from "@emotion/styled";

export const Container = styled.div<{ img: string }>`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background-image: linear-gradient(
      to right,
      rgba(0, 0, 0, 1),
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0)
    ),
    url(${(props) => `${props.img}`});
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
      url(${(props) => `${props.img}`});
  }
`;

export const ContentContainer = styled.div`
  height: 100%;
  color: white;
  overflow-y: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;
  z-index: 5;
  &::-webkit-scrollbar {
    display: none;
  }
  padding: 60px;
  margin-top: 60px;

  h1 {
    color: white;
    text-transform: uppercase;
    margin-bottom: 50px;
    margin-top: 10px;
    font-weight: bold;
    font-size: 35px;
  }

  h2 {
    color: white;
    margin-bottom: 20px;
    margin-top: 20px;
    font-weight: 600;
  }

  p {
    color: white;
    margin-bottom: 10px;
  }

  ul {
    color: white;
    margin: 10px;
    margin-left: 30px;

    li {
      margin-bottom: 5px;
    }
  }

  @media screen and (max-width: 700px) {
    height: 100%;
    width: 100%;
    padding-bottom: 90px;
  }
`;

export const Hamburger = styled.div`
  position: absolute;
  width: 30px;
  height: 30px;
  top: 2%;
  right: 2%;
  z-index: 50;
  background-image: url("/images/hamburger.png");
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  opacity: 0.7;

  &:hover {
    cursor: pointer;
  }

  @media screen and (min-width: 1000px) {
    display: none;
  }
`;
