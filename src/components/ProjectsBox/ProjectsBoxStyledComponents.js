import styled from "styled-components";

export const ProjectsCotents = styled.div`
  margin-top: 70px;
  filter: ${(props) => (props.modal ? "blur(5px)" : "blur(0)")};
  opacity: ${(props) => (props.show ? "1" : "0")};
  transform: ${(props) =>
    props.show ? "translateY(0)" : "translateY(100px);"};
  transition: all 0.5s;
  /* max-width: 1400px; */
  width: 90vw;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
`;

export const ProjectsTitle = styled.div`
  padding-top: 60px;
  padding-bottom: 30px;
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
  height: 50%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, max-content));
  grid-gap: 16px;
  justify-content: center;
  padding: initial;
  @media screen and (max-width: 767px) {
    grid-template-columns: repeat(auto-fit, minmax(70vw, max-content));
  }
`;
export const ProjectsBoxContent = styled.div`
  background-color: white;
  transition: all 0.5s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin: 2vh 20px;
  padding: 20px;
  box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px,
    rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
  transition: all 1s;
  :hover {
    transform: translateY(-15px);
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
  padding: 40px 0 10px;
  font-size: 40px;
  color: black;
  font-weight: bold;
  @media screen and (max-width: 767px) {
    font-size: 25px;
  }
`;
export const ProjectsContentDate = styled.div`
  padding: 10px 0 20px;
  font-size: 20px;
  color: #999999;
  font-weight: bold;

  @media screen and (max-width: 767px) {
    font-size: 15px;
  }
`;
