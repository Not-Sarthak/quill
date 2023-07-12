import { Button } from "@mui/material";
import react, { useState } from "react";
import {
  AppBar,
  Container,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";

const Add = () => {
  return (
    <Button>
      <div
        className="Button"
        style={{
          width: 130.55,
          height: 40,
          paddingTop: 9,
          paddingBottom: 9,
          paddingLeft: 1,
          paddingRight: 1,
          background: "#1d1f1e",
          borderRadius: 30,
          borderLeft: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderTop: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderRight: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderBottom: "0.50px rgba(168, 240, 230, 0.60) solid",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body3">
          <div
            style={{
              color: "#a8f0cb",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Create Post
          </div>
        </Typography>
      </div>
    </Button>
  );
};

export default Add;
