import React, { useState, useEffect } from "react";
import "./style.css";
import data from "./Bloggers.json";
import Explore from "../Buttons/Explore";
import Create from "../Buttons/Create";
import * as fcl from "@onflow/fcl";
import { getOwnerInfo } from "../../flow/cadence_code_emulator";
import BloggerCard from "../Cards/BloggerCard";

function App() {
  const bloggers = data.Bloggers;
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search" />
          <Create />
        </div>
        <div className="cards">
          {bloggers.map((address,index) => {
            return (<BloggerCard address={address} index={index} key={index}/>);
          })}
        </div>
      </div>
    </>
  );
}

export default App;
