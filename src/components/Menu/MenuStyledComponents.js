import styled from "styled-components";

export const MenuBar = styled.div`
  position: fixed;
  display: flex;
  z-index: 2;
  width: 100vw;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  background-color: white;
  color: #205929;
  @media screen and (min-width: 1099px) {
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  }
`;
export const MenuTitle = styled.div`
  display: flex;
  align-content: center;
  position: relative;
  margin-left: ${props => props.main ? "100px" : "70px"};
  margin-left: 100px;
  font-size: 40px;
  font-weight: 800;
  color: #205929;
  @media screen and (max-width: 767px) {
    margin-left: ${props => props.main ? "10vw" : "5vw"};
  }
`;
export const MenuContents = styled.div`
  display: flex;
  font-size: 18px;
  font-weight: 600;
  margin-right: 100px;
  color: black;
  @media screen and (max-width: 767px) {
    margin-right: 5vw;
  }
`;

export const MenuContent = styled.div`
  margin: 0 15px;
  padding: 10px 0;
  ::before {
    content: "";
    position: relative;
    top: 30px;
    left: 50%;
    display: block;
    width: 0;
    height: 3px;
    background-color: #205929;
    border-radius: 3px;
    transition: all linear 0.3s;
  }
  :hover {
    ::before {
      left: 0;
      width: 100%;
    }
  }
`;
export const MobileMenuContents = styled.div`
  position: absolute;
  z-index: 0;
  top: 70px;
  width: 100%;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.1);
  background-color: white;
  transition: all 0.5s;
  transform: ${(props) => (props.menu ? "translateY(0)" : "translateY(-100%)")};
`;
export const MobileMenuContent = styled.div`
  color: black;
  font-size: 20px;
  ::before {
    content: "";
    position: relative;
    top: 35px;
    left: 50%;
    display: block;
    width: 0;
    height: 3px;
    background-color: #205929;
    border-radius: 3px;
    transition: all linear 0.3s;
  }
  :hover {
    ::before {
      left: 0;
      width: 100%;
    }
  }
`;
export const IconImg = styled.img`
  width: 36px;
  height: 36px;
  
`;
