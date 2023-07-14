import React from 'react'
import Navbar from "../components/Navbars/MainNavbar";
import Section13 from "../containers/Section13";
import Section15 from "../containers/Section15";
import Navlist from "../components/Navbars/Navlist.jsx";

const Writer = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop: "8%"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Section15 />
          <Navlist />
        </div>
        <Section13 />
      </div>
    </div>
  )
}

export default Writer