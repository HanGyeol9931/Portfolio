import styled from "styled-components";

export const ContactContainer = styled.div`
  width: 100vw;
  position: absolute;
  margin: 70px 0;
`;

export const ContactCotentsBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: all 1s;
  width: 300px;
  height: 300px;
  background-color: white;
  margin: 40px;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15) !important;
`;
export const ContactCotentsBoxDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #527d59;
  flex-wrap: wrap;
  min-height: calc(100vh - 70px);
  width: 100vw;
`;
export const ContactCotentsIconDiv = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100px;
  height: 100px;
  background-color: #205929;
  /* 여기 변경해야 됌 */
  transition: all 0.5s;
  transform: ${(props) => (props.show ? "translateY(0)" : "translateY(45px);")};
  
`;
export const ContactCotentsTitle = styled.div`
  position: relative;
  text-shadow: -0.03em 0.03em black;
  padding: 30px;
  font-weight: bold;
  font-size: 20px;
  transition: all 0.5s;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-45px);"};
`;
export const ContactCotent = styled.div`
  position: relative;
  text-shadow: -0.03em 0.03em black;
  font-weight: bold;
  font-size: 20px;
  color: block;
  transition: all 0.5s;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(-95px);"};
`;
