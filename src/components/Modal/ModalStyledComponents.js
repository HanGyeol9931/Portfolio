import styled from "styled-components";

export const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${(props) => (props.open ? "100" : "-100")};
  width: 100vw;
  height: 100vh;
  transition: all 0.5s;
  transform: ${(props) => (props.open ? "translateY(0)" : "translateY(100px)")};
  opacity: ${(props) => (props.open ? "1" : "0")};
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 767px) {
    position: fixed;
    top: 10px;
  }
`;
export const ModalBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-content: center;
  /* max-width: 1400px; */
  width: 90vw;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 12px 28px 0px,
    rgba(0, 0, 0, 0.1) 0px 2px 4px 0px,
    rgba(255, 255, 255, 0.05) 0px 0px 0px 1px inset;
  border-radius: 10px;
  background-color: white;
  max-height: 95vh;
  
  @media screen and (max-width: 767px) {
  }
`;
export const ModalBoxTop = styled.div`
  position: absolute;
  z-index: 1;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  width: 100%;
  height: 40px;
  background-color: #0f4318;
`;
export const ModalBoxExit = styled.div`
  position: absolute;
  background-color: rgb(255, 95, 87);
  right: 20px;
  top: 10px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  :hover {
    .bi-x {
      display: block;
    }
  }
`;
