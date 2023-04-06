import React from "react";
import Content from "./Content";
import {
  ModalContainer,
  ModalBox,
  ModalBoxTop,
  ModalBoxExit,
} from "./ModalStyledComponents";

const Modal = ({ open, setOpen, data }) => {
  function click(e) {
    if (e.target.className.split(" ").includes("close")) {
      setOpen(!open);
    } else if (e.target.className === "bi bi-x") {
      setOpen(!open);
    }
  }
  return (
    <ModalContainer className="close" open={open} onClick={click}>
      <ModalBox>
        <ModalBoxTop>
          <ModalBoxExit>
            <i className="bi bi-x"></i>
          </ModalBoxExit>
        </ModalBoxTop>
        <Content data={data} />
      </ModalBox>
    </ModalContainer>
  );
};

export default Modal;
