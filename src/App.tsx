import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import SearchTvShows from "./container/SearchTvShows/SearchTvShows";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/"} element={(<SearchTvShows />)} />
        <Route path={"/shows/:id"} element={("Shows")} />
      </Routes>
    </Layout>
  );
}

export default App;
