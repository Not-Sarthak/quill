import React from "react";
import Navbar from "../components/Navbars/MainNavbar";
import Section13 from "../containers/Section13";
import Section14 from "../containers/Section14";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Display = () => {
  const { id } = useParams();
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
  return (
    <div>
      <Navbar />
      <div style={{ paddingTop: "8%" }}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {Object.keys(bloggerData).map((address) => {
            if (address == id) {
              const info = bloggerData[address];
              return (
                <Section14
                  address={id}
                  avatar={info.avatar}
                  bio={info.bio}
                  name={info.name}
                  cost={info.subscriptionCost}
                />
              );
            }
          })}
        </div>
        <Section13 />
      </div>
    </div>
  );
};

export default Display;
