import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Blog from "./app/pages/blog/Blog";
import Shop from "./app/pages/shop/Shop";
import Promo from "./app/pages/promo/Promo";
import Story from "./app/pages/story/Story";
import Detail from "./app/pages/detail/Detail";
import Home from "./app/pages/home/Home";


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
