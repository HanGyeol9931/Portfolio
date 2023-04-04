import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  height: 100%;
  padding: 20px 0;
  @media screen and (max-width: 767px) {
    ::-webkit-scrollbar {
      display: none; /* Chrome, Safari, Opera*/
    }
    height: 100%;
    overflow: scroll;
    -ms-overflow-style: none;
    grid-template-columns: 1fr;
  }
`;
export const ContentContentImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #999999;
  border-radius: 20px;
  
  width: ${props=>props.view==="Mobile"? "20vw":"30vw"};
  max-width: ${props=>props.view==="Mobile"? "300px":"400px"};
  height: ${props=>props.view==="Mobile"? "70vh":"30vw"};
  max-height: ${props=>props.view==="Mobile"? "700px":"400px"};
  /* 모바일 w:20vw h:70vh mw:300px mh:700px */
  /* pc w:30vw h:30vw mw:400px mh:400px*/
  @media screen and (max-width: 991px) {
    width: 30vw;
    height: 50vh;
  }
  @media screen and (max-width: 767px) {
    width: ${props=>props.view==="Mobile"? "60vw":"60vw"};
    height: ${props=>props.view==="Mobile"? "50vh":"60vw"};
    /* width: 60vw; */
    /* height: 20vh; */
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
  @media screen and (max-width: 991px) {
    font-size: 30px;
  }
  @media screen and (max-width: 767px) {
    font-size: 40px;
    padding: 10px 0;
  }
`;
export const ContentContentSmallTitle = styled.span`
  font-family: "Noto Sans KR", "Nanum Gothic";
  font-weight: bold;
  font-size: 16px;
  @media screen and (max-width: 991px) {
    font-size: 12px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
export const ContentContentText = styled.span`
  font-family: "Noto Sans KR", "Nanum Gothic";
  color: #999999;
`;
export const ContentContentTexts = styled.p`
  font-family: "Noto Sans KR", "Nanum Gothic";
  font-size: 16px;
  @media screen and (max-width: 991px) {
    font-size: 12px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
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
  @media screen and (max-width: 991px) {
    height: auto;
    margin: 10px;
    padding: 5px 15px;
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
  @media screen and (max-width: 991px) {
    font-size: 15px;
  }
`;
