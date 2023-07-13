import React from 'react';
import Section12 from "../containers/Section12";
import Navbar from "../components/Navbars/MainNavbar";
import Footer from "../components/Footers/MainFooter";

const Display = () => {
  return (
    <div>
        <Navbar />
        <div className="sec" style={{marginTop:220}}>
          <Section12 style={{}} />
        </div>
        <Footer />
    </div>
  )
}

export default Display