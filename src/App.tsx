import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Detail from "./presentation/pages/Detail";
import Home from "./presentation/pages/Home";
import Blog from "./presentation/pages/Blog";
import Shop from "./presentation/pages/Shop";
import Promo from "./presentation/pages/Promo";
import Story from "./presentation/pages/Story";

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
          <Route path="/promo" element={<Promo />}></Route>
          <Route path="/story" element={<Story />}></Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
