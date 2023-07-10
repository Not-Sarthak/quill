import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Swap from "./pages/Swap";
import Community from "./pages/Community";
import Footer from "../src/components/Footers/MainFooter";
import Navbar from "../src/components/Navbars/MainNavbar";
import Create from "./pages/Create";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/swap" element={<Swap />} />
        <Route path="/community" element={<Community />} />
        <Route path="/create" element={<Create />} />
      </Routes>
    </div>
  );
};

export default App;