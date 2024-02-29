import Layout from "./components/Layout/Layout";
import {Route, Routes} from "react-router-dom";

function App() {

  return (
    <Layout>
      <Routes>
        <Route path={"/shows/:id"} element={("Shows")} />
      </Routes>
    </Layout>
  );
}

export default App;
