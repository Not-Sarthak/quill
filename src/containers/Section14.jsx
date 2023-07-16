import React from "react";
import Join from "../components/Buttons/Join";
import "../App.css";
import "../components/Search/style.css";

const Section14 = (props) => {
  return (
    <div
      className="headline"
      style={{
        lineheight: 20,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: "1px solid #37a4a0",
        borderRadius: 30,
        width: "60%",
      }}
    >
      <div className="logo-img" style={{}}>
        <img
          src={`https://nftstorage.link/ipfs/${props.avatar}`}
          alt="alt"
          loading={"lazy"}
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "100%",
            overflow: "hidden",
            display: "flex",
            border: "1px solid #37a4a0",
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
              paddingRight: 50,
            }}
          >
            {props.bio}
          </p>
        </div>
      </div>
      <div
        className="type-headline"
        style={{  paddingLeft: 82 }}
      >
        <div className="price_container" style={{display: 'flex', justifyContent: 'space-between', margin:1}}>
        <div style={{padding: '10px'}}>
          Cost : {props.cost}
          </div>
          <img
            src="https://s2.coinmarketcap.com/static/img/coins/64x64/4558.png"
            className="logo"
            style={{ width: "30px", height: "30px"}}
          ></img>
        </div>
        <Join cost={props.cost} />
      </div>
    </div>
  );
};

export default Section14;
