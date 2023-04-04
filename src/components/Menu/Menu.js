import React, { useEffect, useState } from "react";
import { MenuBar, MenuTitle, MenuContents, IconImg } from "./MenuStyledComponents";
import { Icon } from "semantic-ui-react";
import { useLocation, useNavigate } from "react-router-dom";

const Menu = ({ setUrl }) => {
  const [main, setMain] = useState(true);
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    if (location.pathname === "/") {
      setMain(true);
    } else {
      setMain(false);
    }
  }, [location.pathname]);
  async function page(name) {
    if (location.pathname === "/about") {
      await setUrl("right");
    } else if (location.pathname === "/projects") {
      await setUrl("left");
    } else if (location.pathname === "/contact") {
      await setUrl("up");
    }
    await nav(`/${name}`);
  }
  return (
    <div>
      <MenuBar>
        <MenuTitle main={main}>
          {main ? null : (
            <Icon
              onClick={() => {
                page("");
              }}
              name={"angle double left"}
              className="backIcon"
              size="small"
            />
          )}
          <div
            onClick={() => {
              page("");
            }}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            hangyeol.
          </div>
        </MenuTitle>
        <MenuContents>
          <Icon
            onClick={() => {
              window.open("https://github.com/HanGyeol9931");
            }}
            className="icon"
            name={"github"}
            size="big"
          />
          <IconImg
            alt=""
            onClick={() => {
              window.open(
                "https://fourth-saturn-12d.notion.site/38f029f575d64814ace22b130119320d"
              );
            }}
            className="icon"
            src="https://imghub.insilicogen.com/media/photos/lbj_notion_0.png"
          />
        </MenuContents>
      </MenuBar>
    </div>
  );
};

export default Menu;
