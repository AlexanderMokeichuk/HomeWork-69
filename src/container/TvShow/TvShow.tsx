import React, {useEffect} from "react";
import {useParams} from "react-router-dom";
import {useAppDispatch, useAppSelector} from "../../app/hooks";
import {searchTvShow} from "../../store/storeThunks";
import Spinner from "../../components/Spinner/Spinner";

const TvShow: React.FC = () => {
  const {id} = useParams();
  const {show, loading} = useAppSelector((state) => state.show);
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (id != null) {
      dispatch(searchTvShow(id));
    }
  }, [id]);

  return (
    (loading)
      ? <Spinner/>
      : <div className={"d-flex gap-5"}>
        <div className={"border rounded-1"} style={{width: "fit-content"}}>
          <a href={show.url} target={"_blank"}>
            <img
              src={show.image.original}
              style={{width: 300, height: 400}}
              className={"rounded-2"}
            />
          </a>
        </div>
        <div>
          <h2>{show.name}</h2>
          <div
            dangerouslySetInnerHTML={{__html: show.summary}}
          />
        </div>
      </div>
  );
};

export default TvShow;