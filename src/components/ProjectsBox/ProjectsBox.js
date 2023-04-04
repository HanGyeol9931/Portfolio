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
import maskman from "../../img/MaskMan.gif";
import closesea from "../../img/CloseSea.gif";
import report from "../../img/제보채널.gif";

const ProjectsBox = ({ modal, setModal, setShow }) => {
  const [main, setMain] = useState(false);
  const [showReport, setShowReport] = useState(false);
  const [showClosesea, setShowClosesea] = useState(false);
  const [showMskman, setShowMskman] = useState(false);
  function madalShow(e) {
    if (e.currentTarget.className.split(" ").includes("report")) {
      setShow("report");
    } else if (e.currentTarget.className.split(" ").includes("closesea")) {
      setShow("closesea");
    } else if (e.currentTarget.className.split(" ").includes("maskman")) {
      setShow("maskman");
    }
    setModal(!modal);
  }
  useEffect(() => {
    setTimeout(() => {
      setMain(true);
    }, 500);
    setTimeout(() => {
      setShowReport(true);
    }, 500);
    setTimeout(() => {
      setShowClosesea(true);
    }, 700);
    setTimeout(() => {
      setShowMskman(true);
    }, 900);
  }, []);
  return (
    <div>
      <ProjectsCotents modal={modal} show={main}>
        <ProjectsTitle>Projects</ProjectsTitle>
        <ProjectsBoxContents>
          <ProjectsBoxContent
            className="report"
            onClick={madalShow}
            show={showReport}
          >
            <ProjectsContentImg src={report} alt="" />
            <ProjectsContentText>Report Chenel</ProjectsContentText>
            <ProjectsContentDate>23.01.04 ~ 23.02.24</ProjectsContentDate>
          </ProjectsBoxContent>
          <ProjectsBoxContent
            className="closesea"
            onClick={madalShow}
            show={showClosesea}
          >
            <ProjectsContentImg src={closesea} alt="" />
            <ProjectsContentText>Close Sea</ProjectsContentText>
            <ProjectsContentDate>22.12.19 ~ 22.12.23</ProjectsContentDate>
          </ProjectsBoxContent>
          <ProjectsBoxContent
            className="maskman"
            onClick={madalShow}
            show={showMskman}
          >
            <ProjectsContentImg src={maskman} alt="" />
            <ProjectsContentText>Mask Man</ProjectsContentText>
            <ProjectsContentDate>22.10.12 ~ 22.10.28</ProjectsContentDate>
          </ProjectsBoxContent>
        </ProjectsBoxContents>
      </ProjectsCotents>
    </div>
  );
};

export default ProjectsBox;
