import React from "react";
import {ShowInAutocomplete} from "../../type";
import {Link} from "react-router-dom";
import "./AutocompleteStyle.css";
import {useAppDispatch} from "../../app/hooks";
import {changeNameTvShow, resetShows} from "../../store/autocompleteSlice";

interface Props {
  items: ShowInAutocomplete[]
}
const Autocomplete: React.FC<Props> = ({items}) => {
  const dispatch = useAppDispatch();

  const reset = () => {
    dispatch(resetShows());
    dispatch(changeNameTvShow(null));
  };

  return (
      <div className={"autocomplete d-flex flex-column rounded-3 bg-secondary"}>
        {items.map((i) => {
          return (
            <Link
              to={`/shows/${i.id}`}
              key={i.id}
              onClick={reset}
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