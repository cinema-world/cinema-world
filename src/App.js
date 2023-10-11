import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Component/Home/Home";
import Tranding from "./Component/Tranding/Tranding";
import Favorite from "./Component/Favorite/Favorite";
import NavBar from "./Component/NavBar/NavBar";
import Footers from "./Component/Footers/Footers";

function App() {
  return (
    <>
      <NavBar />
      <Router>
        <Routes>
          <Route path="/" Component={Home}></Route>
          <Route path="/trend_movie" Component={Tranding}></Route>
          <Route path="/favorite" Component={Favorite}></Route>
        </Routes>
        <Footers />
      </Router>
    </>
    
  );
}

export default App;