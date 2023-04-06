import React, { useEffect, useState } from "react";
import {
  ProjectsCotents,
  ProjectsBoxContent,
  ProjectsTitle,
  ProjectsContentImg,
  ProjectsBoxContents,
  ProjectsContentText,
  ProjectsContentDate,
} from "./ProjectsBoxStyledComponents";
import Data from "../Data";

const ProjectsBox = ({ modal, setModal, setData }) => {
  const [main, setMain] = useState(false);
  function modalShow(data) {
    setData(data);
    setModal(!modal);
  }
  useEffect(() => {
    setTimeout(() => {
      setMain(true);
    }, 500);
  }, []);
  return (
    <div>
      <ProjectsCotents modal={modal} show={main}>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsBoxContents>
          {Object.keys(Data()).map((key) => {
            return (
              <ProjectsBoxContent
                key={key}
                className={Data()[key].classname}
                onClick={() => {
                  modalShow(Data()[key]);
                }}
              >
                <ProjectsContentImg
                  src={Data()[key].img}
                  alt={`${Data()[key].title} 이미지`}
                />
                <ProjectsContentText>{Data()[key].title}</ProjectsContentText>
                <ProjectsContentDate>{Data()[key].date}</ProjectsContentDate>
              </ProjectsBoxContent>
            );
          })}
        </ProjectsBoxContents>
      </ProjectsCotents>
    </div>
  );
};

export default ProjectsBox;
