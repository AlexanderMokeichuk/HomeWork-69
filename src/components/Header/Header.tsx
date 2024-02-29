import React from "react";
import NavBar from "../NavBar/NavBar";

const Header: React.FC = () => {
  return (
    <header className={"bg-primary"}>
      <div className={"container d-flex align-items-center justify-content-between"}>
        <h3 className={"text-white"}>TV Shows</h3>
        <NavBar />
      </div>
    </header>
  );
};

export default Header;