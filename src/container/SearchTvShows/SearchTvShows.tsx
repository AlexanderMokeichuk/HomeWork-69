import React from "react";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
  import Autocomplete from "../../components/Autocomplete/Autocomplete";
import {Outlet} from "react-router-dom";
import {changeNameTvShow} from "../../store/autocompleteSlice";
import {searchTvShows} from "../../store/storeThunks";

const SearchTvShows = () => {
  const dispatch = useAppDispatch();
  const {shows, nameTvShow} = useAppSelector((state) => state.autocomplete);
  const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
    dispatch(changeNameTvShow(e.target.value));
    dispatch(searchTvShows(nameTvShow));
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
              value={nameTvShow}
              placeholder="Search"
              required

              onChange={onChange}
            />
          </form>
        </div>
        <div className={"position-fixed "} style={{left: "41.5%", top: "10%", width:500}}>
          <Autocomplete items={shows}/>
        </div>
        <div className={"mt-5"}>
          <Outlet/>
        </div>
    </div>
</div>
)
  ;
};

export default SearchTvShows;