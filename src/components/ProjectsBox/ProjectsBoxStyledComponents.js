import styled from "styled-components";

export const ProjectsCotents = styled.div`
  filter:${props => props.modal ? "blur(5px)":"blur(0)"} ;
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(100px);"};
  transition: all 0.5s;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 1200px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  @media screen and (max-width: 1200px) {
    width: 80vw;
  }
  @media screen and (max-width: 767px) {
    position: relative;
    height: auto;
    width: 80vw;
    top: 30px;
    left: 50%;
    transform: translate(-50%, 0);
  }
`;

export const ProjectsTitle = styled.div`
    padding-top: 60px;
    padding-bottom: 30px;
  /* margin: 20px 0 50px; */
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
export const ProjectsBoxContents = styled.div`
  display: flex;
  height: 50%;
  justify-content: space-around;
  align-items: center;

  @media screen and (max-width: 767px) {
    flex-wrap: wrap;
  }
`;
export const ProjectsBoxContent = styled.div`
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(100px);"};
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* border: 1px solid; */
  margin: 100px 20px;
  padding: 10px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: all 1s;
  :hover {
    transform: translateY(-50px);
  }
  @media screen and (max-width: 1200px) {
    margin: 50px 15px;
  }
  @media screen and (max-width: 767px) {
    margin: 30px 10px;
  }
`;
export const ProjectsContentImg = styled.img`
  width: 300px;
  height: 350px;
  @media screen and (max-width: 1200px) {
    width: 20vw;
    height: 25vw;
  }
  @media screen and (max-width: 767px) {
    width: 50vw;
    height: 60vw;
  }
`;
export const ProjectsContentText = styled.div`
text-shadow: -.03em .03em black;
  padding: 40px 0 10px;
  font-size: 40px;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    font-size: 25px;
  }
  @media screen and (max-width: 767px) {
    font-size: 20px;
    padding: 20px 0;
    font-weight: bold;
  }
`;
export const ProjectsContentDate = styled.div`
text-shadow: -.03em .03em #999999;
  padding: 10px 0 20px;
  font-size: 20px;
  color: #999999;
  font-weight: bold;
  @media screen and (max-width: 1200px) {
    font-size: 15px;
  }
  @media screen and (max-width: 767px) {
    font-size: 10px;
    padding: 0 0 10px;
    font-weight: bold;
  }
`;
