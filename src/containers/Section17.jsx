import React from 'react';
import '../App.css';
import { section17Content } from "../utils/content";

const { Feature1, Feature2, Feature3, Feature4, Feature5, Feature6 } = section17Content;

const Section17 = () => {
  return (
    <div className="section17">
        <h1 className="linear-wipe">Quill 🪶</h1>
        <h2 className="linear-wipe2">Flowing Words, Thriving Crowds.</h2>
        <p className="linear-wipe3" style={{color: ''}}>Manage your entire community,<br/> in a single system</p>
        <div className="f-grid">
            <img src={Feature1} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
            <img src={Feature2} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
            <img src={Feature3} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
        </div>
        <div className="f-grid">
            <img src={Feature4} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
            <img src={Feature5} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
            <img src={Feature6} style={{border: "1px solid #94b1e3", boxShadow: "0 20px 50px #71e5e5"}}/>
        </div>
    </div>
  )
}

export default Section17