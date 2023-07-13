import React from 'react';
import Section12 from "../containers/Section12";
import Navbar from "../components/Navbars/MainNavbar";
import Footer from "../components/Footers/MainFooter";
import Notification from "../components/Display/Notification";
import Headline from "../components/Display/Headline"
import Img from "../components/Display/Img";
import Navlist from '../components/Display/Navlist';

const Display = () => {
  return (
    <div>
        <Navbar />
        <div className="sec" style={{marginTop:220}}>
          <Section12 style={{}} />
        </div>
        {/* <Notification />
        <Img />
        <Navlist/> */}
        <Headline/>
        <Footer />
    </div>
  )
}

export default Display