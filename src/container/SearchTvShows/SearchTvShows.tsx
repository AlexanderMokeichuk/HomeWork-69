import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {searchTvShows} from "../../store/shows/showsThunks";
import Autocomplete from "../../components/Autocomplete/Autocomplete";

const SearchTvShows = () => {
  const dispatch = useAppDispatch();
  const shows = useAppSelector((state) => state.tvShows.shows);
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    if(e.target.value.length) {
      dispatch(searchTvShows(e.target.value));
    }
  };

  return (
    <div className="container">
      <div className={"mt-3 d-flex flex-column mx-auto position-relative"}>
        <div className={"d-flex justify-content-center align-items-center gap-5 mb-1"}>
          <label className={"form-label"}>Search for TV Show</label>
          <form className="d-flex">
            <input
              className="form-control me-2"
              style={{width:500}}
              type="search"
              name={"search"}
              placeholder="Search"
              required

              onChange={onChange}
            />
          </form>
        </div>
        <div className={"position-absolute"} style={{left: "37.5%", top: "100%", width:500}}>
          <Autocomplete items={shows}/>
        </div>
    </div>
</div>
)
  ;
};

export default SearchTvShows;