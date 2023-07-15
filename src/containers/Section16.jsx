import React from 'react';
import { section16Content } from '../utils/content';
import {
    Box,
    Button,
    Container,
    Hidden,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
import Title from "../components/Title";

const {title, Section} = section16Content;

const Section16 = () => {

    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <Box sx={{ width: "100%" }}>
        <Box sx={{ zIndex: -10, top: 0, left: 0, right: 0 }}>
          <img src={Section} style={{ width: "100%" }} />
        </Box>
    </Box>
  )
}

export default Section16