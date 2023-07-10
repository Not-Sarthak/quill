import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Create from "./pages/Create";
import Footer from "../src/components/Footers/MainFooter";
import Navbar from "../src/components/Navbars/MainNavbar";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/community" element={<Community />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;