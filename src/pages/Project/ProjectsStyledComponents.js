import styled from "styled-components";

export const ProjectsContainer = styled.div`
  position: absolute;
  margin: 70px 0;
  width: 100vw;
  overflow: hidden;
 
`;
export const ProjectsCotentsDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #527d59;
  flex-wrap: wrap;
  min-height: calc(100vh - 70px);
  width: 100vw;
  @media screen and (max-width: 767px) {
      padding-bottom: 70px;
  }

`;
