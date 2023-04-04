import React, { useEffect, useState } from "react";
import {
  EducationCotents,
  EducationTitle,
  EducationCotentDay,
  EducationCotent,
  EducationIcon,
  EducationTitleCotents,
  EducationCotentTitle,
  EducationCotentName,
  EducationCotentValue,
} from "./EducationStyledComponents";

const EducationComponent = () => {
    
    const [show, SetShow] = useState(false);
    useEffect(() => {
      setTimeout(() => {
        SetShow(true);
      }, 700);
    }, []);
  return (
    <div>
      <EducationCotents show={show}>
        <EducationTitle>Education</EducationTitle>
        <EducationCotent>
          <EducationIcon>
            <i className="bi bi-display"></i>
          </EducationIcon>
          <EducationTitleCotents>
            <EducationCotentDay>2022.May ~ 2023 Feb.</EducationCotentDay>
            <EducationCotentTitle>
              블록체인 기반 핀테크 및 응용 SW 개발자 양성과정
            </EducationCotentTitle>
            <EducationCotentName>경일게임아카데미</EducationCotentName>
            <EducationCotentValue>
              비전공자를 대상으로 하는 전문 교육 과정으로 HTML/CSS와 같은
              기초적인 부분부터 시작하여 Node.js 기반의 백엔드, React를 활용한
              프론트엔드, MySQL을 활용한 데이터베이스, AWS EC2 서버 배포 등을
              배우며 웹 프로그래밍에 관한 전반적인 교육을 받았습니다. 뿐만
              아니라, Web3를 활용한 웹 페이지
              제작, Solidity를 활용한 스마트 컨트랙트 작성 및 배포 등을 배우면서
              블록체인 개발에 관한 지식을 쌓았습니다. 그리고 교육 과정을
              수료하는 동안 4번의 팀 프로젝트를 경험하였으며 이를 통해 팀 단위로
              협업하여 개발하는 방법에 대해 배우고 터득할 수 있었습니다.
            </EducationCotentValue>
          </EducationTitleCotents>
        </EducationCotent>
      </EducationCotents>
    </div>
  );
};

export default EducationComponent;
