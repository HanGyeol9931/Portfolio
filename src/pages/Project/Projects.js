import React, { useState } from "react";
import {
  ProjectsContainer,
  ProjectsCotentsDiv,
} from "./ProjectsStyledComponents";
import ProjectsBox from "../../components/ProjectsBox/ProjectsBox";
import Modal from "../../components/Modal/Modal";

const Projects = () => {
  const [modal, setModal] = useState(false);
  const [data, setData] = useState({});
  return (
    <>
      <ProjectsContainer>
        <ProjectsCotentsDiv open={modal}>
          <Modal open={modal} setOpen={setModal} data={data} />
          <ProjectsBox modal={modal} setModal={setModal} setData={setData} />
        </ProjectsCotentsDiv>
      </ProjectsContainer>
    </>
  );
};

export default Projects;
