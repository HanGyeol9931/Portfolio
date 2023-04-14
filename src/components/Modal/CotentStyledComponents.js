import styled from "styled-components";

export const ContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  grid-template-columns: 1fr 1fr;
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
  position: fixed;
  top: ${(props) => (props.view === "Mobile" ? "22vh" : "27vh")};
  top: ${(props) => (props.view === "Mobile" ? "calc(50vh - 35vh)" : "calc(50vh - 250px)")} ;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  border: 1px solid #999999;
  border-radius: 20px;
  width: ${(props) => (props.view === "Mobile" ? "400px" : "500px")};
  height: ${(props) => (props.view === "Mobile" ? "70vh" : "500px")};
  @media screen and (max-width: 991px) {
    top: ${(props) => (props.view === "Mobile" ? "calc(50vh - 35vh)" : "calc(50vh - 20vw)")} ;
    width: ${(props) => (props.view === "Mobile" ? "30vw" : "40vw")};
  height: ${(props) => (props.view === "Mobile" ? "70vh" : "40vw")};
  }
  @media screen and (max-width: 767px) {
    position: relative;
    top: auto;
    width: ${(props) => (props.view === "Mobile" ? "65vw" : "80vw")};
    height: ${(props) => (props.view === "Mobile" ? "65vh" : "80vw")};
    min-width: ${(props) => (props.view === "Mobile" ? "200px" : "240px")};
    min-height: ${(props) => (props.view === "Mobile" ? "400px" : "240px")};
    /* width: 60vw;
    height: 20vh; */
  }
`;
export const ContentContentImgDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
`;
export const ContentContent = styled.div`
  padding: 20px;
`;
export const ContentContentTitle = styled.div`
  line-height: normal;
  font-weight: bold;
  font-size: 60px;
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
  font-size: 20px;
`;
export const ContentContentDate = styled.div`
  line-height: normal;
  color: #205929;
  font-family: "Noto Sans KR", "Nanum Gothic";
  text-align: center;
  font-size: 25px;
  padding: 10px 0 30px;
  @media screen and (max-width: 991px) {
    font-size: 25px;
  }
`;
