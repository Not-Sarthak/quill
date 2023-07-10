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
  import { useAuth } from "../../utils/AuthContext";
  import "../../flow/config";

const Join = () => {
  const { user, logOut, logIn } = useAuth();
  return (
    <Button onClick={!user.loggedIn?logIn:logOut}>
        <div className="Button" style={{width: 130.55, height: 40, paddingTop: 9, paddingBottom: 9, paddingLeft: 13, paddingRight: 12.55, background: '#F4D3D3', borderRadius: 8, borderLeft: '0.50px rgba(168, 240, 230, 0.60) solid', borderTop: '0.50px rgba(168, 240, 230, 0.60) solid', borderRight: '0.50px rgba(168, 240, 230, 0.60) solid', borderBottom: '0.50px rgba(168, 240, 230, 0.60) solid', justifyContent: 'flex-start', alignItems: 'flex-start', zIndex: -10}}>
            <Typography variant="body2">
                {!user.loggedIn?(<div style={{color: "#A76F6F"}}>Connect</div>):(<div style={{color: "#A76F6F"}}>LogOut</div>)}
            </Typography>
        </div>
    </Button>
  )
}

export default Join