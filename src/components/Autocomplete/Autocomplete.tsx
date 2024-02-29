import React from "react";
import {Show} from "../../type";
import {Link} from "react-router-dom";
import "./AutocompleteStyle.css";
import {useAppDispatch} from "../../app/hooks";
import {resetShows} from "../../store/shows/shows";

interface Props {
  items: Show[]
}
const Autocomplete: React.FC<Props> = ({items}) => {
  const dispatch = useAppDispatch();

  return (
      <div className={"d-flex flex-column rounded-3 bg-secondary"}>
        {items.map((i) => {
          return (
            <Link
              to={`/shows/${i.id}`}
              key={i.id}
              onClick={() => dispatch(resetShows())}
              className={"linkShows text-white link-underline link-underline-opacity-0"}
            >
              {i.name}
            </Link>
          );
        })}
      </div>
  );
};

export default Autocomplete;