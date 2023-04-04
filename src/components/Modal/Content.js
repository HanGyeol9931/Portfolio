import React, { useEffect, useState } from "react";
import {
  ContentContainer,
  ContentContentImg,
  ContentContentImgDiv,
  ContentContent,
  ContentContentTitle,
  ContentContentSmallTitle,
  ContentContentText,
  ContentContentBtn,
  ContentContentBtns,
  ContentContentTexts,
  ContentContentDate,
} from "./CotentStyledComponents";
import Data from "../Data";

const Content = ({ show }) => {
  const [data, setData] = useState("report");
  useEffect(() => {
    if (show === "report") {
      setData(Data().report);
    } else if (show === "closesea") {
      setData(Data().closesea);
    } else if (show === "maskman") {
      setData(Data().maskman);
    }
  }, [show]);
  function linkOpen() {
    window.open(data.page.link);
  }
  function gitHubOpen() {
    console.log(data.page.github);
    if (data.page.github === "") {
      alert("회사 API주소 노출문제로 인해 코드 미공개");
      return;
    }
    window.open(data.page.github);
  }
  return (
    <ContentContainer>
      <ContentContentImgDiv>
        <ContentContentImg view={data.view} src={data.img} />
      </ContentContentImgDiv>
      <ContentContent>
        <ContentContentTitle>{data.title}</ContentContentTitle>
        <ContentContentBtns>
          <ContentContentBtn onClick={linkOpen}>Link</ContentContentBtn>
          <ContentContentBtn onClick={gitHubOpen}>GitHub</ContentContentBtn>
        </ContentContentBtns>
        <ContentContentDate>{data.date}</ContentContentDate>
        <ContentContentTexts>
          <ContentContentSmallTitle>소개 : </ContentContentSmallTitle>
          <ContentContentText>{data.introduction}</ContentContentText>
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>기술스택 : </ContentContentSmallTitle>
          <ContentContentText>{data.skill}</ContentContentText>
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>주요 기능 : </ContentContentSmallTitle>
          <ContentContentText>{data.function}</ContentContentText>
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>담당 역할 : </ContentContentSmallTitle>
          <ContentContentText>{data.role}</ContentContentText>
        </ContentContentTexts>
      </ContentContent>
    </ContentContainer>
  );
};

export default Content;
