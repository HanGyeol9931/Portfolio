import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.5fr;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  grid-gap: 16px;
  width: 100%;
  height: 100%;
  padding: 60px 20px;
  ::-webkit-scrollbar {
    display: none;
  }
  overflow: scroll;
  @media screen and (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`;
export const ContentContentImg = styled.img`
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #999999;
  border-radius: 20px;
  max-width: ${(props) => (props.view === "Mobile" ? "400px" : "600px")};
  max-height: ${(props) => (props.view === "Mobile" ? "700px" : "600px")};
  min-width: ${(props) => (props.view === "Mobile" ? "350px" : "250px")};
  min-height: ${(props) => (props.view === "Mobile" ? "300px" : "250px")};
  width: ${(props) => (props.view === "Mobile" ? "20vw" : "45vw")};
  height: ${(props) => (props.view === "Mobile" ? "60vh" : "45vw")};
  /* 모바일 w:20vw h:70vh mw:300px mh:700px */
  /* pc w:30vw h:30vw mw:400px mh:400px*/
  @media screen and (max-width: 991px) {
    max-width: ${(props) => (props.view === "Mobile" ? "400px" : "400px")};
    max-height: ${(props) => (props.view === "Mobile" ? "600px" : "400px")};
    min-width: ${(props) => (props.view === "Mobile" ? "300px" : "400px")};
    min-height: ${(props) => (props.view === "Mobile" ? "500px" : "400px")};
  }
  @media screen and (max-width: 767px) {
    width: ${(props) => (props.view === "Mobile" ? "65vw" : "80vw")};
    height: ${(props) => (props.view === "Mobile" ? "65vh" : "80vw")};
    min-width: ${(props) => (props.view === "Mobile" ? "200px" : "240px")};
    min-height: ${(props) => (props.view === "Mobile" ? "400px" : "240px")};
    /* width: 60vw; */
    /* height: 20vh; */
  }
`;
export const ContentContentImgDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const ContentContent = styled.div`
  padding: 20px;
`;
export const ContentContentTitle = styled.div`
  line-height: normal;
  font-weight: bold;
  font-size: 50px;
  text-align: center;
  color: #205929;
  @media screen and (max-width: 767px) {
    font-size: 40px;
    padding: 10px 0;
  }
`;
export const ContentContentSmallTitle = styled.div`
  font-family: "Noto Sans KR", "Nanum Gothic";
  font-weight: bold;
  font-size: 25px;
  @media screen and (max-width: 991px) {
    font-size: 20px;
  }
  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
export const ContentContentText = styled.div`
  line-height: normal;
  padding: 5px 0;
  font-family: "Noto Sans KR", "Nanum Gothic";
  color: #999999;
`;
export const ContentContentTexts = styled.div`
  padding: 16px 0;
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
  @media screen and (max-width: 991px) {
    height: auto;
    margin: 10px;
    padding: 5px 15px;
  }
`;
export const ContentContentBtns = styled.div`
  display: flex;
  justify-content: center;
  font-size: 25px;
`;
export const ContentContentDate = styled.div`
  line-height: normal;
  color: #205929;
  font-family: "Noto Sans KR", "Nanum Gothic";
  text-align: center;
  font-size: 30px;
  padding: 10px 0 30px;
  @media screen and (max-width: 991px) {
    font-size: 25px;
  }
`;
