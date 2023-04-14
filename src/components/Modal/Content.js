import React, { useEffect } from "react";
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

const Content = ({ data }) => {
  useEffect(()=>{
    console.log(data.img);
  },[data])
  function linkOpen() {
    window.open(data && data.page.link);
    return;
  }
  function gitHubOpen() {
    if (data.page.github === "") {
      alert("회사 API주소 노출문제로 인해 코드 미공개");
      return;
    }
    window.open(data.page.github);
  }
  return (
    <ContentContainer>
      <ContentContentImgDiv>
        <ContentContentImg view={data && data.view} src={data && data.img} />
      </ContentContentImgDiv>
      <ContentContent>
        <ContentContentTitle>{data && data.title}</ContentContentTitle>
        <ContentContentBtns>
          <ContentContentBtn onClick={linkOpen}>Link</ContentContentBtn>
          <ContentContentBtn onClick={gitHubOpen}>GitHub</ContentContentBtn>
        </ContentContentBtns>
        <ContentContentDate>{data && data.date}</ContentContentDate>
        <ContentContentTexts>
          <ContentContentSmallTitle>팀구성</ContentContentSmallTitle>
          <ContentContentText>{data && data.member}</ContentContentText>
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>소개</ContentContentSmallTitle>
          <ContentContentText>{data && data.introduction}</ContentContentText>
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>기술스택</ContentContentSmallTitle>
          {data.skill &&
            data.skill.split("- ").map((e) => {
              return e === "" ? null : (
                <ContentContentText>- {e}</ContentContentText>
              );
            })}
        </ContentContentTexts>
        <ContentContentTexts>
          <ContentContentSmallTitle>담당 역할</ContentContentSmallTitle>
          {data.role &&
            data.role.split("- ").map((e) => {
              return e === "" ? null : (
                <ContentContentText>- {e}</ContentContentText>
              );
            })}
        </ContentContentTexts>
      </ContentContent>
    </ContentContainer>
  );
};

export default Content;
