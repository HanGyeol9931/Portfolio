import styled from "styled-components";

export const EducationCotents = styled.div`
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(100px);"};
  position: relative;
  display: grid;
  grid-template-columns: 1000px;
  padding: 60px;
  transition: all 0.5s;
  background-color: white;
  margin: 0 0 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover {
    transform: translateY(-5px);
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 80vw;
    padding: 5vw;
    margin: 5vw;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 80vw;
    padding: 5vw;
    margin: 5vw;
  }
`;
export const EducationTitle = styled.div`
  margin: 20px 0 50px;
  text-align: center;
  color: #205929;
  font-size: 60px;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    font-size: 50px;
  }
  @media screen and (max-width: 767px) {
    font-size: 40px;
  }
`;
export const EducationTitleCotents = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic" !important;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
export const EducationCotentDay = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  color: #205929;
  font-size: 20px;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
export const EducationCotentTitle = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  margin: 15px 0;
  font-size: 24px;
  font-weight: bold;
  line-height: 1.1;
`;
export const EducationCotent = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 20px;
`;
export const EducationIcon = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #205929;
`;
export const EducationCotentName = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  margin: 0 0 15px;
  font-size: 20px;
  font-weight: bold;
`;
export const EducationCotentValue = styled.div`
  p {
    font-family: "Noto Sans KR", "Nanum Gothic";
    margin: 0 0 15px;
    font-size: 18px;
    line-height: 1.6;
    color: #999999;
  }
`;
