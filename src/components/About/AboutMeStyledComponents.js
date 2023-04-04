import styled from "styled-components";

export const AboutContents = styled.div`
  opacity: ${props => props.show ? "1":"0"};
  transform:${props => props.show ? "translateY(0)":"translateY(100px);"}; 
  display: grid;
  grid-template-columns: 500px 500px;
  place-items: center;
  padding: 60px;
  transition: all 0.5s;
  background-color: white;
  margin: 40px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  :hover {
    border-bottom: 0;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    transform: translateY(-5px);
    background-color: white;
  }
  @media screen and (max-width: 1200px) {
    grid-template-columns: 40vw 40vw;
    padding: 5vw;
    margin: 5vw;
  }
  @media screen and (max-width: 767px) {
    grid-template-columns: 80vw;
    grid-template-rows: 1fr 1fr;
    padding: 5vw;
    margin: 5vw;
  }
`;
export const AboutImg = styled.img`
  width: 300px;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  @media screen and (max-width: 767px) {
    width: 50vw;
  }
`;
export const AboutImgDiv = styled.div`
  border-right: 1px solid #999999;
  display: flex;
  justify-content: center;
  width: 100%;
  @media screen and (max-width: 767px) {
    border-right: 0;
    width: 50vw;
  }
`;
export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AboutTitle = styled.div`
  color: #205929;
  padding: 10px 0 60px;
  font-size: 60px;
  font-weight: bold;
  @media screen and (max-width: 991px) {
    font-size: 50px;
  }
  @media screen and (max-width: 767px) {
    font-size: 40px;
    padding: 2vw 0 5vw;
  }
`;
export const AboutValues = styled.div`
  font-size: 40px;
  font-weight: 800;
  @media screen and (max-width: 767px) {
  }
`;
export const AboutValue = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  display: flex;
  font-weight: lighter;
  font-size: 20px;
  padding: 15px 0;
  @media screen and (max-width: 767px) {
    padding: 2vw 0;
  }
`;
export const AboutValueTitle = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  width: 70px;
`;
