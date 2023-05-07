import './App.css';
import TopBar from "./components/topbar/TopBar";
import Home from "./pages/home/Home";
import React from "react";
import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Kyiv from "./pages/single/Kyiv";
import Hoverla from "./pages/single/Hoverla";
import Vinnytsia from "./pages/single/Vinnytsia";
import USA from "./pages/single/USA";
import Bring from "./pages/single/Bring";
import Hotels from "./pages/single/Hotels";
import About from "./pages/about/About";
import Contact from "./pages/contact/contact";
function App() {
  return (
  <Router>
    <TopBar/>
    <Routes>
      <Route path="*" element={<Home/>}></Route>
      <Route path="/" element={<Home/>}></Route>
      <Route path="about" element={<About/>}></Route>
      <Route path="contact" element={<Contact/>}></Route>
      <Route path="kyiv" element={<Kyiv/>}></Route>
      <Route path="hoverla" element={<Hoverla/>}></Route>
      <Route path="vinnytsia" element={<Vinnytsia/>}></Route>
      <Route path="usa" element={<USA/>}></Route>
      <Route path="bring" element={<Bring/>}></Route>
      <Route path="hotels" element={<Hotels/>}></Route>
    </Routes>
  </Router>
  );
}

export default App;
