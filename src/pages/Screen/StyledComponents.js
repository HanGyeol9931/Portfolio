import styled from "styled-components";

export const Home = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 0;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    bottom: -10vw;
    left: -10vw;
    display: block;
    width: ${(props) => (props.ball ? "40vw" : "0")};
    height: ${(props) => (props.ball ? "40vw" : "0")};
    border-radius: 50%;
    background-color: #0f4318;
    transition: all 1s;
    opacity: ${(props) => (props.ball ? "0.8" : "0")};
    @media screen and (max-width: 991px) {
      bottom: -80px;
      left: -100px;
      width: ${(props) => (props.ball ? "40vh" : "0")};
      height: ${(props) => (props.ball ? "40vh" : "0")};
    }
    @media screen and (max-width: 767px) {
      bottom: -80px;
      left: -100px;
      width: ${(props) => (props.ball ? "40vh" : "0")};
      height: ${(props) => (props.ball ? "40vh" : "0")};
    }
  }
  ::after {
    content: "";
    position: absolute;
    top: -5vh;
    right: -5vw;
    display: block;
    width: ${(props) => (props.ball ? "30vw" : "0")};
    height: ${(props) => (props.ball ? "30vw" : "0")};
    opacity: ${(props) => (props.ball ? "0.8" : "0")};
    border-radius: 50%;
    background-color: #0f4318;
    transition: all 1s;
    @media screen and (max-width: 991px) {
      top: -10px;
      right: -100px;
      width: ${(props) => (props.ball ? "30vh" : "0")};
      height: ${(props) => (props.ball ? "30vh" : "0")};
    }
    @media screen and (max-width: 767px) {
      top: -10px;
      right: -100px;
      width: ${(props) => (props.ball ? "30vh" : "0")};
      height: ${(props) => (props.ball ? "30vh" : "0")};
    }
  }
`;
export const HomeContent = styled.div`
  cursor: pointer;
  position: relative;
  text-align: center;
  color: white;
  font-size: 120px;
  padding: 100px;
  transition: opacity 1s, transform 1s, color 0.3s;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) => (props.show ? `translateY(0)` : "translateY(100px)")};
  color: ${(props) => (props.item ? "#205929" : "white")};
  -webkit-text-stroke-width: ${(props) => (props.item ? null : "3px")};
  -webkit-text-stroke-color: ${(props) => (props.item ? null : "#205929")};
  :hover {
    color: #205929;
  }
  @media screen and (max-width: 767px) {
    -webkit-text-stroke-width: ${(props) => (props.item ? null : "1.5px")};
    font-size: 50px;
    padding: 40px;
  }
`;
