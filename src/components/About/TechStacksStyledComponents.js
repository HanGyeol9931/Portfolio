import styled from "styled-components";

export const TechStacksCotents = styled.div`
opacity: ${props => props.show ? "1":"0"};
  transform:${props => props.show ? "translateY(0)":"translateY(100px);"}; 
  transition: all 0.5s;
  position: relative;
  display: grid;
  grid-template-columns: 1000px;
  padding: 60px;
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
export const TechStacksTitle = styled.div`
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
export const TechStacksFlex = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksFlexContents = styled.div`
  margin: 10px 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
    margin: 5vw;
  }
`;
export const TechStacksFlexContentIcon = styled.img`
  width: 50px;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksFlexContentText = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  padding: 10px 0;
  font-weight: bold;
  color: #999999;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksCotentsTitle = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  margin: 10px 0;
  font-size: 30px;
  font-weight: bold;
  line-height: 1.1;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksCotentsText = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  margin: 0 0 10px;
  font-size: 25px;
  
  line-height: 1.1;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksCotentsTextTitle = styled.div`
font-weight: bold;
  font-family: "Noto Sans KR", "Nanum Gothic";
  margin: 15px 0;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
export const TechStacksCotentsTextValue = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  color: #999999;
  margin: 0 0 10px;
  font-size: 20px;
  /* font-weight: bold; */
  line-height: 1.1;
  @media screen and (max-width: 991px) {
  }
  @media screen and (max-width: 767px) {
  }
`;
