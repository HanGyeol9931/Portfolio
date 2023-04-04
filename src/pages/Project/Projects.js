import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsCotentsDiv,
} from "./ProjectsStyledComponents";
import ProjectsBox from "../../components/ProjectsBox/ProjectsBox";
import Modal from "../../components/Modal/Modal";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [show, setShow] = useState(null);
  return (
    <>
      <ProjectsContainer>
        <ProjectsCotentsDiv open={modal}>
          <Modal open={modal} setOpen={setModal} show={show} />
          <ProjectsBox modal={modal} setModal={setModal} setShow={setShow} />
        </ProjectsCotentsDiv>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
