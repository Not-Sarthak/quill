import React from 'react';
import "../../App.css";
import Img from "../../components/Img/Img.jsx";
import Write from "../../components/Buttons/Write";

const Headline = () => {
  return (
    <div className="headline" style={{lineheight: 20, display: 'flex', justifyContent: "center", alignItems: "center",border: "1px solid #0d4220", borderRadius: 30, width: "50%"}}>
      <div className="logo-img" style={{paddingTop: "10px"}}>
        <Img style={{float: "left", width: "100px", height: "100px", borderRadius: "100%", overflow:"hidden", display: "flex",}}/>
      </div>
      <div className="text-headline" style={{}}>
        <div className="headline-heading" style={{}}>
          <h1 className="sample-para" style={{paddingLeft: 58, fontFamily: "Jakarta Sans", }}>Community Title</h1>
        </div>
        <div className="tagline-headline" style={{fontFamily: "Jakarta Sans",}}>
          <p className="sample-para" style={{display: 'flex', justifyContent: 'center', alignItems: 'center', paddingBottom: 20, paddingRight: 58}}>Community Tagline</p>
        </div>
      </div>
      <div className="type-headline" style={{paddingTop: "24px", paddingLeft: 80,}}>
        <Write/>
      </div>
    </div>
  )
}

export default Headline