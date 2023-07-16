import React from "react";
import { Box } from "@mui/material";
import Navbar from "../components/Navbars/MainNavbar";
import Section18 from "../containers/Section18";

const Memberships = () => {
  return (
      <div>
        {/* Navbar */}
        <Navbar />
        <Section18 />
        {/* Sections */}
        <Box sx={{ bgcolor: "background.default", position: "relative" }}></Box>
      </div>
  );
};

export default Memberships;
