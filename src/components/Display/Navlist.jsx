import React from 'react'

const Navlist = () => {
  return (
    <div className="navlist" style={{width: "100%", position: "relative", flexDirection: "column", justifyContent:"flex-start", alignItems: "flex-start", display:"inline-flex"}}>
        <div className="Tab" style={{paddingTop: 10, paddingBottom: 16, paddingLeft: 8, paddingRight: 7.02, borderBottom: "1px #A8F0E6 solid", justifyContent: "flex-start", alignItems: "flex-start", display: "inline-flex",}}>
            <div className="Details nav-link nav-link-ltr" style={{textAlign:"center", color: "#EOFFFD", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: 600, lineHeight:4, wordWrap: "break-word",  marginRight: 65}}>
                <a
                href="/desc"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
                >
                Details
                </a>
            </div>
            <div className="Free nav-link nav-link-ltr" style={{textAlign:"center", color: "#EOFFFD", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: 600, lineHeight: 4, wordWrap: "break-word", marginRight: 65 }}>
                <a
                href="/free"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
                >
                Free
                </a>
            </div>
            <div className="Chat nav-link nav-link-ltr" style={{textAlign:"center", color: "#EOFFFD", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: 600, lineHeight: 4, wordWrap: "break-word", marginRight: 65 }}>
                <a
                href="/paid"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
                >
                Paid
                </a>
            </div>
            <div className="Paid nav-link nav-link-ltr" style={{textAlign:"center", color: "#EOFFFD", fontSize: 18, fontFamily: "Plus Jakarta Sans", fontWeight: 600, lineHeight: 4, wordWrap: "break-word", marginRight: 65 }}>
                <a
                href="/chat"
                target="blank"
                style={{ color: "inherit", textDecoration: "none" }}
                >
                Chat
                </a>
            </div>
        </div>
    </div>
  )
}

export default Navlist