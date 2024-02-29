import React from "react";
import {Link} from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className={"bg-primary"}>
      <div className={"container d-flex align-items-center justify-content-between"}>
        <Link to={'/'} className={"text-white nav-link"}>
          <h3>TV Shows</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;