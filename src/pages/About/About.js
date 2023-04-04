import React from "react";
import { AboutContainer } from "./AboutStyledComponents";
import AboutMeContent from "../../components/About/AboutMeComponent";
import EducationComponent from "../../components/About/EducationComponent";
import TechStacksComponent from "../../components/About/TechStacksComponent";

const About = () => {
  return (
    <AboutContainer>
      <AboutMeContent />
      <EducationComponent />
      <TechStacksComponent />
    </AboutContainer>
  );
};

export default About;
