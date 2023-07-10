import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Community from "./pages/Community";
import Create from "./pages/Create";
import Add from "./pages/Add";
import Footer from "../src/components/Footers/MainFooter";
import Navbar from "../src/components/Navbars/MainNavbar";
import AuthProvider from "./utils/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/create" element={<Create />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </div>
    </AuthProvider>
  );
};

export default App;
