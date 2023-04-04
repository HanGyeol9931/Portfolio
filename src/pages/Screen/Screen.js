import React, { useEffect, useState } from "react";
import { Home, HomeContent } from "./StyledComponents";
import { useNavigate } from "react-router-dom";

const Screen = ({ setUrl }) => {
  const nav = useNavigate();
  const [ball, setBall] = useState(false);
  const [aboutText, setAboutText] = useState(false);
  const [projectsText, setProjectsText] = useState(false);
  const [contactText, setContactText] = useState(false);

  const [about, setAbout] = useState(true);
  const [projects, setProjects] = useState(false);
  const [contact, setContact] = useState(false);
  function over(name) {
    switch (name) {
      case "about":
        setAbout(true);
        setProjects(false);
        setContact(false);
        break;
      case "projects":
        setAbout(false);
        setProjects(true);
        setContact(false);
        break;
      case "contact":
        setAbout(false);
        setProjects(false);
        setContact(true);
        break;
      default:
        break;
    }
  }
  async function page(name) {
    if (name === "about") {
      await setUrl("left");
    } else if (name === "projects") {
      await setUrl("right");
    } else if (name === "contact") {
      await setUrl("down");
    }
    await nav(`/${name}`);
  }
  useEffect(() => {
    setTimeout(() => {
      setBall(true);
      setAboutText(true);
    }, 600);
    setTimeout(() => {
      setProjectsText(true);
    }, 800);
    setTimeout(() => {
      setContactText(true);
    }, 1000);
  }, []);
  return (
    <>
      <Home ball={ball}>
        <HomeContent
          onMouseOver={() => over("about")}
          onClick={() => page("about")}
          item={about}
          show={aboutText}
        >
          About Me
        </HomeContent>
        <HomeContent
          onMouseOver={() => over("projects")}
          onClick={() => page("projects")}
          item={projects}
          show={projectsText}
        >
          Projects
        </HomeContent>
        <HomeContent
          onMouseOver={() => over("contact")}
          onClick={() => page("contact")}
          item={contact}
          show={contactText}
        >
          Contact
        </HomeContent>
      </Home>
    </>
  );
};

export default Screen;
