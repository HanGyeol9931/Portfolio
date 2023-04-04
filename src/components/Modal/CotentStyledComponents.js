import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  padding: 20px 0;
  @media screen and (max-width: 767px) {
    height: 100%;
    overflow: hidden;
    grid-template-columns: 1fr;
  }
`;
export const ContentContentImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #999999;
  border-radius: 20px;
  width: 80%;
  height: 700px;
  @media screen and (max-width: 767px) {
    width: 80vw;
    height: 30vh;
  }
`;
export const ContentContentImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
export const ContentContent = styled.div`
  padding: 20px;
`;
export const ContentContentTitle = styled.div`
  font-weight: bold;
  padding: 30px 0;
  font-size: 50px;
  text-align: center;
  color: #205929;
  @media screen and (max-width: 767px) {
    font-size: 30px;
    padding: 10px 0;
  }
`;
export const ContentContentSmallTitle = styled.span`
  font-family: "Noto Sans KR", "Nanum Gothic";
  font-weight: bold;
  font-size: 20px;
`;
export const ContentContentText = styled.span`
  font-family: "Noto Sans KR", "Nanum Gothic";
  color: #999999;
`;
export const ContentContentTexts = styled.p`
  font-family: "Noto Sans KR", "Nanum Gothic";
  font-size: 20px;
`;

export const ContentContentBtn = styled.button`
  cursor: pointer;
  padding: 0 20px;
  height: 40px;
  background-color: transparent;
  border: 2px solid #205929;
  color: #205929;
  border-radius: 10px;
  margin: 20px;
  transition: all 0.5s;
  :hover {
    color: white;
    background-color: #205929;
  }
`;
export const ContentContentBtns = styled.div`
  display: flex;
  justify-content: center;
`;
export const ContentContentDate = styled.div`
  color: #205929;
  font-family: "Noto Sans KR", "Nanum Gothic";
  text-align: center;
  font-size: 30px;
  padding: 10px 0 30px;
  @media screen and (max-width: 767px) {
    font-size: 20px;
  }
`;
