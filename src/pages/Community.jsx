import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbars/MainNavbar";
import Section8 from "../containers/Section8";

const Community = () => {
  return (
      <div>
        {/* Navbar */}
        <Navbar />
        <Section8 />
        {/* Sections */}
        <Box sx={{ bgcolor: "background.default", position: "relative" }}></Box>
      </div>
  );
};

export default Community;
