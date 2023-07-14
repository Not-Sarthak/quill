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
import { useParams } from "react-router-dom";
import * as fcl from "@onflow/fcl";
import { Subscribe } from "../../flow/cadence_code_emulator";

const Join = (props) => {
  // console.log(props);
  const {id}=useParams();

  async function handleJoin(){
    fcl.config.put("0xBlogger",id);
    let joinId = await fcl.mutate({
      cadence:Subscribe,
      args:(arg,t)=>[arg(props.cost,t.UFix64)],
      proposer: fcl.authz,
      payer: fcl.authz,
      authorizations: [fcl.authz],
      limit: 999,
    });
    // console.log(joinId);  
  }

  return (
    <Button onClick={handleJoin}>
      <div
        className="Button"
        style={{
          width: 130.55,
          height: 40,
          paddingLeft: 13,
          paddingRight: 12.55,
          paddingBottom: "40%",
          background: "#1d1f1e",
          borderRadius: 8,
          borderLeft: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderTop: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderRight: "0.50px rgba(168, 240, 230, 0.60) solid",
          borderBottom: "0.50px rgba(168, 240, 230, 0.60) solid",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography variant="body3">
          <p
            style={{
              color: "#a8f0cb",
              display: "flex",
              justifyContent: "center",
              alignContent: "center",
            }}
          >
            Join
          </p>
        </Typography>
      </div>
    </Button>
  );
};

export default Join;
