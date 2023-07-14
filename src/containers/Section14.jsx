import React from "react";
import Join from "../components/Buttons/Join";
import "../App.css";
import "../components/Search/style.css";

const Section14 = (props) => {
  console.log(props);
  return (
    <div
      className="headline"
      style={{
        lineheight: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #0d4220",
        borderRadius: 30,
        width: "50%",
      }}
    >
      <div className="logo-img" style={{ paddingTop: "10px" }}>
        <img
          src={`https://nftstorage.link/ipfs/${props.avatar}`}
          alt="alt"
          loading={"lazy"}
          style={{
            float: "left",
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            overflow: "hidden",
            display: "flex",
          }}
        />
      </div>
      <div className="text-headline" style={{}}>
        <div className="headline-heading" style={{}}>
          <h1
            className="sample-para"
            style={{ paddingLeft: 58, fontFamily: "Jakarta Sans" }}
          >
            {props.name}
          </h1>
        </div>
        <div
          className="tagline-headline"
          style={{ fontFamily: "Jakarta Sans" }}
        >
          <p
            className="sample-para"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              paddingBottom: 20,
              paddingRight: 58,
            }}
          >
            {props.bio}
          </p>
        </div>
      </div>
      <div
        className="type-headline"
        style={{ paddingTop: "24px", paddingLeft: 80 }}
      >
        <div className="price_container">
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/4558.png"
            className="logo"
          ></img>
          Cost : {props.cost}
        </div>
        <Join />
      </div>
    </div>
  );
};

export default Section14;
