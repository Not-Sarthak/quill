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


const Connect = () => {
  return (
    <Button>
        <div className="Button" style={{width: 130.55, height: 40, paddingTop: 9, paddingBottom: 9, paddingLeft: 13, paddingRight: 12.55, background: '#F4D3D3', borderRadius: 8, borderLeft: '0.50px rgba(168, 240, 230, 0.60) solid', borderTop: '0.50px rgba(168, 240, 230, 0.60) solid', borderRight: '0.50px rgba(168, 240, 230, 0.60) solid', borderBottom: '0.50px rgba(168, 240, 230, 0.60) solid', justifyContent: 'flex-start', alignItems: 'flex-start', zIndex: -10}}>
            <Typography variant="body2">
              <div style={{color: "#A76F6F"}}>
                Connect
              </div>
            </Typography>
        </div>
    </Button>
  )
}

export default Connect