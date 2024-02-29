import React from "react";

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="container-fluid">
        <form className="d-flex">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search"
            />
        </form>
      </div>
    </nav>
  );
};

export default NavBar;