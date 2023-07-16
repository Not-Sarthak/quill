import React from "react";
import Explore from "../Buttons/Explore";
import "../../App.css";
import { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import { getOwnerInfo } from "../../flow/cadence_code_testnet";

const BloggerCard = ({ address, index }) => {
  console.log(address, index);
  useEffect(() => {
    getBlogger(address);
  }, [address, index]);
  const [bloggerData, setData] = useState([]);
  async function getBlogger(add) {
    fcl.config.put("0xBlogger", add);
    const response = await fcl.query({
      cadence: getOwnerInfo,
      args: (arg, t) => [],
    });
    setData(response);
  }
  return (
    <div className="template_Container">
      <div className="main_box">
        <div className="template">
          <div className="box1">
            <div className="box2">
              <img
                src={`https://nftstorage.link/ipfs/${bloggerData.avatar}`}
                alt=""
              />
              <div className="price_container">
                {bloggerData.subscriptionCost}
              </div>
            </div>
            <div className="name_container">{bloggerData.name}</div>
            <div className="description_container">{bloggerData.bio}</div>
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
};

export default BloggerCard;
