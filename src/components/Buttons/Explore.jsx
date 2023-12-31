import { Button } from "@mui/material";
import react, {useState} from "react";
import {
    AppBar,
    Container,
    IconButton,
    Stack,
    Typography,
    useMediaQuery,
    useTheme,
  } from "@mui/material";
  import { useNavigate } from "react-router-dom";


const Explore = ({address}) => {
  const navigate=useNavigate();
  function handleClick(){
    navigate(`/display/${address}`);
  }
  return (
    
    <Button onClick={handleClick}>
        <div className="Button" style={{width: 130.55, height: 40, paddingBottom: 9, paddingLeft: 13, paddingRight: 12.55, background: '#1d1f1e', borderRadius: 8, borderLeft: '0.50px rgba(168, 240, 230, 0.60) solid', borderTop: '0.50px rgba(168, 240, 230, 0.60) solid', borderRight: '0.50px rgba(168, 240, 230, 0.60) solid', borderBottom: '0.50px rgba(168, 240, 230, 0.60) solid', justifyContent: 'flex-start', alignItems: 'flex-start'}}>
            <Typography variant="body3">
              <p style={{color: "#a8f0cb", display: "flex", justifyContent: "center", alignContent: "center",}}>
                Explore
              </p>
            </Typography>
        </div>
    </Button>
  )
}

export default Explore