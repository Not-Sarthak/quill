import React from 'react'
import Navbar from "../components/Navbars/MainNavbar"
import Section13 from "../containers/Section13";
import Section14 from "../containers/Section14";
import Navlist from "../components/Navbars/Navlist.jsx"

const Display = () => {
  return (
    <div>
      <Navbar />
      <div style={{paddingTop: "8%"}}>
        <div style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
          <Section14 />
          <Navlist />
        </div>
        <Section13 />
      </div>
    </div>
  )
}

export default Display