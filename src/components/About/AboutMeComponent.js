import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  AboutImg,
  AboutContents,
  AboutTitle,
  AboutContent,
  AboutValues,
  AboutValue,
  AboutImgDiv,
  AboutValueTitle,
} from "./AboutMeStyledComponents";
import Img from "../../img/이력서사진.jpg";
const AboutMeContents = () => {
  function notion() {
    window.open(
      "https://fourth-saturn-12d.notion.site/38f029f575d64814ace22b130119320d"
    );
  }
  const [show, SetShow] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      SetShow(true);
    }, 600);
  }, []);
  return (
    <div>
      <AboutContents show={show}>
        <AboutImgDiv>
          <AboutImg src={Img} />
        </AboutImgDiv>
        <AboutContent>
          <AboutTitle>About Me</AboutTitle>
          <AboutValues>
            <AboutValue>
              <AboutValueTitle>Name:</AboutValueTitle> 김한결
            </AboutValue>
            <AboutValue>
              <AboutValueTitle>Blog :</AboutValueTitle>
              <Link onClick={notion}>Notion URL (Link)</Link>
            </AboutValue>
            <AboutValue>
              <AboutValueTitle>Email:</AboutValueTitle> gksruf9939@gmail.com{" "}
            </AboutValue>
            <AboutValue>
              <AboutValueTitle>Phone:</AboutValueTitle>010-2036-9931
            </AboutValue>
          </AboutValues>
        </AboutContent>
      </AboutContents>
    </div>
  );
};

export default AboutMeContents;
