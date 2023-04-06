import React, { useEffect, useState } from "react";
import {
  TechStacksCotents,
  TechStacksTitle,
  TechStacksFlex,
  TechStacksFlexContents,
  TechStacksFlexContentIcon,
  TechStacksFlexContentText,
  TechStacksCotentsTitle,
  TechStacksCotentsText,
  TechStacksCotentsTextTitle,
  TechStacksCotentsTextValue,
} from "./TechStacksStyledComponents";
import html5 from "../../img/html5.svg";
import css3 from "../../img/css3.svg";
import javascript from "../../img/javascript.svg";
import nodedotjs from "../../img/nodedotjs.svg";
import socketdotio from "../../img/socketdotio.svg";
import react from "../../img/react.svg";
import mysql from "../../img/mysql.svg";
import sequelize from "../../img/sequelize.svg";
import solidity from "../../img/solidity.svg";

const TechStacksComponent = () => {
  const [show, SetShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetShow(true);
    }, 700);
  }, []);
  return (
    <div>
      <TechStacksCotents show={show}>
        <TechStacksTitle>Tech Stacks</TechStacksTitle>
        <TechStacksFlex>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={html5} alt="" />
            <TechStacksFlexContentText>HTML5</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={css3} alt="" />
            <TechStacksFlexContentText>CSS3</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={javascript} alt="" />
            <TechStacksFlexContentText>Javascript</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={nodedotjs} alt="" />
            <TechStacksFlexContentText>Node.js</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={socketdotio} alt="" />
            <TechStacksFlexContentText>Socket.io</TechStacksFlexContentText>
          </TechStacksFlexContents>
        </TechStacksFlex>
        <TechStacksFlex>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={react} alt="" />
            <TechStacksFlexContentText>React</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={mysql} alt="" />
            <TechStacksFlexContentText>MySQL</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={sequelize} alt="" />
            <TechStacksFlexContentText>Sequelize</TechStacksFlexContentText>
          </TechStacksFlexContents>
          <TechStacksFlexContents>
            <TechStacksFlexContentIcon src={solidity} alt="" />
            <TechStacksFlexContentText>Solidity</TechStacksFlexContentText>
          </TechStacksFlexContents>
        </TechStacksFlex>
        <TechStacksCotentsTitle>기술 상세</TechStacksCotentsTitle>
        <TechStacksCotentsText>
          <TechStacksCotentsTextTitle>React</TechStacksCotentsTextTitle>
          <TechStacksCotentsTextValue>
            - 기본적인 CRUD 기능 구현
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - styled-components 활용 가능
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - React-Query, Redux-Thunk, Middleware를 통한 상태 관리
          </TechStacksCotentsTextValue>
        </TechStacksCotentsText>
        <TechStacksCotentsText>
          <TechStacksCotentsTextTitle>Node.js</TechStacksCotentsTextTitle>
          <TechStacksCotentsTextValue>
            - Express를 이용하여 웹서버 구축
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - RESTful API 구현
          </TechStacksCotentsTextValue>

          <TechStacksCotentsTextValue>
            - Sequelize를 이용한 DB 입출력 기능 구현
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - WebSocket을 이용한 소켓 통신 구현
          </TechStacksCotentsTextValue>
        </TechStacksCotentsText>
        <TechStacksCotentsText>
          <TechStacksCotentsTextTitle>MySQL</TechStacksCotentsTextTitle>
          <TechStacksCotentsTextValue>
            - DB 스키마 작성 및 관리
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - 기본적인 CRUD 기능 구현
          </TechStacksCotentsTextValue>
        </TechStacksCotentsText>
        <TechStacksCotentsText>
          <TechStacksCotentsTextTitle>Solidity</TechStacksCotentsTextTitle>
          <TechStacksCotentsTextValue>
            - Truffle 활용하여 Smart Contract 작성 및 test-net 배포
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - Web3.js를 적용한 웹페이지 제작 가능
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - 메타마스크와 연동하여 Dapp 제작 가능
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - ERC-20 토큰 발행 / ERC-721 NFT 발행
          </TechStacksCotentsTextValue>
          <TechStacksCotentsTextValue>
            - 민팅 컨트랙트 및 토큰 판매/구매 컨트랙트 구현 가능
          </TechStacksCotentsTextValue>
        </TechStacksCotentsText>
        <TechStacksCotentsText>
          <TechStacksCotentsTextTitle>AWS</TechStacksCotentsTextTitle>
          <TechStacksCotentsTextValue>
            - AWS EC2를 사용하여 웹 서버 배포 경험
          </TechStacksCotentsTextValue>
        </TechStacksCotentsText>
      </TechStacksCotents>
    </div>
  );
};

export default TechStacksComponent;
