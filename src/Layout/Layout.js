import React from "react";
import { Outlet } from "react-router-dom";
import Menu from "../components/Menu/Menu";


const Layout = ({setUrl}) => {
  return (
    <div>
        <Menu setUrl={setUrl} />
        <Outlet />
    </div>
  );
};

export default Layout;
