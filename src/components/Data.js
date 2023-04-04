import ReportImg from "../img/제보채널.gif";
import CloseSea from "../img/CloseSea.gif";
import MaskMan from "../img/MaskMan.gif";
const Data = () => {
  const ContentsDatas = {
    report: {
      title: "Report Chenel",
      date: "(Mobile Web) 23.01.04 ~ 23.02.24",
      view:"Mobile",
      introduction:
        "회사의 부당한 내용들을 고발하는 사이트이며 고발한 내용들 관리자가 허가를 하게되면 private 블록체인 네트워크에 저장이 되며 수정 삭제가 불가능하며 내용이 변조가 확인이 가능합니다.",
      skill:
        "React , React Query , Hyperledger Fabric , Node.js , MariaDB , Docker , Sequelize",
      function:
        "회원가입, 로그인, 제보게시판(관리자가 허가하면 블록에 저장) ,이슈 게시판(글쓰기,댓글,대댓글,조회수) 기능이 포함된 모바일웹,",
      role: "데이터 베이스 설계 스키마 제작,API명세서를 통한 API관리 이슈게시판 사진첨부/조회수/수정/삭제/댓글/대댓글 기능 구현 private 블록체인 네트워크 구축 컨트랙트 기능구현",
      img: ReportImg,
      page: {
        github: "",
        link: "http://ec2-15-164-99-218.ap-northeast-2.compute.amazonaws.com",
      },
    },
    closesea: {
      title: "Close Sea",
      date: "(Web) 22.12.19 ~ 22.12.23",
      view:"PC",
      introduction:
        "Goerli 테스트 네트워크 이용하여 NFT 마켓 플레이스를 사이트를 제작하였습니다.",
      skill: "React , Web3 , Solidity , Goerli",
      function:
        "web3 라이브러리를 사용해 메타마스크 지갑 연결 Solidity로 NFT 마켓 플레이스/민팅/스왑 기능 구현",
      role: "데이터 베이스 설계 스키마 제작,API명세서를 통한 API관리 이슈게시판 사진첨부/조회수/수정/삭제/댓글/대댓글 기능 구현",
      img: CloseSea,
      page: {
        github: "https://github.com/HanGyeol9931/NFT_market",
        link: "http://ec2-43-201-8-138.ap-northeast-2.compute.amazonaws.com",
      },
    },
    maskman: {
      title: "Mask Man",
      date: "(Web) 22.10.12 ~ 22.10.28",
      view:"PC",
      introduction:
        "첫 리액트 프로젝트로 NFT의 스테이킹,민팅 등을 구현해보고 싶어서 웹페이지를 제작하였습니다.",
      skill: "React , Redux , Node.js , Express , MySQL",
      function:
        "회원가입, 로그인, 제보게시판(관리자가 허가하면 블록에 저장) ,이슈 게시판(글쓰기,댓글,대댓글,조회수) 기능이 포함된 모바일웹,",
      role: "데이터 베이스 설계 스키마 제작,API명세서를 통한 API관리 이슈게시판 사진첨부/조회수/수정/삭제/댓글/대댓글 기능 구현",
      img: MaskMan,
      page: {
        github: "https://github.com/HanGyeol9931/MaskMan-front",
        link: "http://ec2-3-35-48-37.ap-northeast-2.compute.amazonaws.com",
      },
    },
  };
  return ContentsDatas;
};

export default Data;
