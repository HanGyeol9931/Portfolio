import { Routes, Route, useLocation } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Layout from "../Layout/Layout";
import Screen from "../pages/Main";
import About from "../pages/About/About";
import Projects from "../pages/Project/Projects";
import Contact from "../pages/Contact/Contact";
import { useState } from "react";

function Animation() {
  const [url,setUrl] = useState("right")
  console.log(url);
  const location = useLocation();
  return (
    <TransitionGroup className="transitions-wrapper">
      <CSSTransition
        key={location.pathname}
        classNames={url}
        timeout={500}
      >
        <Routes location={location}>
          <Route path="/" exact element={<Layout setUrl={setUrl}/>}>
            <Route path="" exact element={<Screen setUrl={setUrl} />} />
            <Route path="about" exact element={<About />} />
            <Route path="projects" exact element={<Projects />} />
            <Route path="contact" exact element={<Contact />} />
          </Route>
        </Routes>
      </CSSTransition>
    </TransitionGroup>
  );
}

export default Animation;
