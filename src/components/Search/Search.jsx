import React, { useState, useEffect } from "react";
import "./style.css";
import data from "./Bloggers.json";
import Explore from "../Buttons/Explore";
import Create from "../Buttons/Create";
import * as fcl from "@onflow/fcl";
import { getOwnerInfo } from "../../flow/cadence_code_emulator";
import BloggerCard from "../Cards/BloggerCard";

function App() {
  useEffect(() => {
    getBloggers();
  }, []);
  const [bloggerData, setData] = useState([]);
  async function getBloggers() {
    const response = await fetch(`https://quill-helper.onrender.com/bloggers`, {
      method: "GET",
      headers: {
        KEY: import.meta.env.VITE_FLASK_KEY,
      },
    });
    response.json().then((data) => setData(data));
  }
  // console.log("Outside",Object.keys(bloggerData));
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search" />
          <Create />
        </div>
        <div className="cards">
          {Object.keys(bloggerData).map((address) => {
            const info = bloggerData[address];
            return (
              <div className="template_Container" key={address}>
                <div className="main_box">
                  <div className="template">
                    <div className="box1">
                      <div className="box2">
                        <img
                          src={`https://nftstorage.link/ipfs/${info.avatar}`}
                        />
                        <div className="price_container">
                          <img
                            src="https://s2.coinmarketcap.com/static/img/coins/64x64/4558.png"
                            className="logo"
                          ></img>
                          Cost : {info.subscriptionCost}
                        </div>
                      </div>
                      <div className="name_container">{info.name}</div>
                      <div className="description_container">{info.bio}</div>
                      <div className="box3">
                        <div className="button_container">
                          <Explore />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
