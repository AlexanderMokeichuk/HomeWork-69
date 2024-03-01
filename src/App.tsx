import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import SearchTvShows from "./container/SearchTvShows/SearchTvShows";
import TvShow from "./container/TvShow/TvShow";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<SearchTvShows />)}>
          <Route path={"shows/:id"} element={(<TvShow />)} />
        </Route>
        <Route path={"*"} element={(<h1>Not found 404</h1>)} />
      </Routes>
    </Layout>
  );
}

export default App;
