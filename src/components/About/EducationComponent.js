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
    }, 800);
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
              <p>- WEB3 개발자가 되기 위한 풀스택 개발자과정 수료 (9개월)</p>
              <p>- 반응형웹에 대한 이해 및 개선 경험</p>
              <p>- React를 사용한 웹,웹앱 개발 경험</p>
              <p>- Redux를 통한 전역 상태관리 </p>
              <p>- Nodejs를 이용한 개발 </p>
              <p>- AWS EC2를 이용한 배포 경험</p>
              <p>- Solidity를 이용한 ERC-20, ERC-721 컨트랙트 개발경험</p>
              <p>- Truffle를 이용한 goerli 테스트넷 배포 경험</p>
              <p>
                - Hyperledger Fabric test-network를 이용한 체인 코드 개발 경험
              </p>
            </EducationCotentValue>
          </EducationTitleCotents>
        </EducationCotent>
      </EducationCotents>
    </div>
  );
};

export default EducationComponent;
