import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./pages/Detail";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Shop from "./pages/Shop";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route></Route>
          <Route path="/" element={<Home />}></Route>
          <Route path="/detail/:id" element={<Detail />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/blog" element={<Blog />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
