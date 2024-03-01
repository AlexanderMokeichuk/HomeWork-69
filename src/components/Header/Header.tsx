import React from "react";
import {Link} from "react-router-dom";
import {useAppDispatch} from "../../app/hooks";
import {changeNameTvShow} from "../../store/autocompleteSlice";

const Header: React.FC = () => {
  const dispatch = useAppDispatch();

  return (
    <header className={"bg-primary"}>
      <div className={"container d-flex align-items-center justify-content-between"}>
        <Link
          to={'/'}
          className={"text-white nav-link"}
          onClick={() => dispatch(changeNameTvShow(null))}
        >
          <h3>TV Shows</h3>
        </Link>
      </div>
    </header>
  );
};

export default Header;