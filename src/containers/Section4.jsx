import React from "react";
import "../App.css";
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
import { section4Content } from "../utils/content";
import Title from "../components/Title";

const {
  title,
  titlebetween,
  titlebelow,
  maintitle,
  Front1,
  Front2,
  Front3,
  Back1,
  Back2,
  Back3,
} = section4Content;

const Section4 = () => {
  return (
    <div className="section4">
      <Stack className="text" sx={{ height: "100%" }} justifyContent="center">
        <div className="mainTitle">
          <Title
            variant={{ xs: "custom", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {title}
          </Title>
        </div>
        <div className="mainTitle">
          <Title
            variant={{ xs: "custom", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {titlebetween}
          </Title>
        </div>
        <div className="mainTitle">
          <Title
            variant={{ xs: "custom", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {titlebelow}
          </Title>
        </div>
        <div className="belowTitle">
          <Title
            className="titlebelow"
            variant={{ xs: "custom", sm: "h2", md: "h1" }}
            sx={{ letterSpacing: "0.02em", mb: 1 }}
          >
            {maintitle}
          </Title>
        </div>
      </Stack>
      <Box className="nft">
        <div className="flipper-container">
          <div className="flip">
            <div className="front face text-center">
              <img src={Front1} height="300px" />
            </div>
            <div className="back face">
              <img src={Back1} height="300px" />
            </div>
          </div>
        </div>
        <div className="flipper-container">
          <div className="flip">
            <div className="front face text-center">
              <img src={Front2} height="300px" />
            </div>
            <div className="back face">
              <img src={Back2} height="300px" />
            </div>
          </div>
        </div>
        <div className="flipper-container">
          <div className="flip">
            <div className="front face text-center">
              <img src={Front3} height="300px" />
            </div>
            <div className="back face">
              <img src={Back3} height="300px" />
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default Section4;
