import React from 'react';
import { Button } from "@mui/material";
import InfoIcon from '@mui/icons-material/Info';
import './styles.css';

const Notification = () => {
  return (
    <div className='main'>
    <Button variant="contained" style={{fontWeight:"bold", display: "flex", justifyContent:"center", alignContent:"center", height: 40, paddingBottom: 9, paddingLeft: 13, paddingRight: 12.55, background: '#1d1f1e', borderRadius: 8, borderLeft: '0.50px rgba(168, 240, 230, 0.60) solid', borderTop: '0.50px rgba(168, 240, 230, 0.60) solid', borderRight: '0.50px rgba(168, 240, 230, 0.60) solid', borderBottom: '0.50px rgba(168, 240, 230, 0.60) solid', justifyContent: 'flex-start', alignItems: 'flex-start', fontSize:13}}>
      <div className="DivChakraStack" style={{width: '100%', height: '100%', paddingTop: 8, paddingBottom: 8, paddingLeft: 12, paddingRight: 11.03, background: '#1D1F1E', borderRadius: 9999, justifyContent: 'flex-start', alignItems: 'center', gap: 8, display: 'inline-flex'}}>
        <div className="Svg" style={{width: 18, height: 18, justifyContent: 'center', alignItems: 'center', display: 'flex'}}>
          <div className="Frame" style={{width: 18, height: 18, position: 'relative', flexDirection: 'column', justifyContent: 'flex-start', alignItems: 'flex-start', display: 'flex'}}>
            <div className="Vector" style={{width: 15, height: 15, background: 'white'}}></div>
              <div className="Vector" style={{width: 1.50, height: 7.50, background: 'white'}}></div>
              </div>
              </div>
            <div className="RoundEnded2DaysAgo" style={{color: 'white', fontSize: 12, fontFamily: 'Plus Jakarta Sans', fontWeight: '400', lineHeight: 16, wordWrap: 'break-word'}}>Join in the community now</div>
            </div>
    </Button>
    </div>
  )
}

export default Notification