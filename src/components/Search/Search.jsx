import React, {useState} from "react";
import './style.css';
import data from "./Communities.json";
import Join from "../Buttons/Join";
import Create from "../Buttons/Create";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <div className="templateContainer">
        <div className="searchInput_Container">
          <input id="searchInput" type="text" placeholder="Search" onChange={(event) => {
            setSearchTerm(event.target.value);
          }} />
          <Create/>
        </div>
        <div className="template_Container">
          {
            data 
              .map((val) => {
                return(
                  <div className="main_box" key={val.id}>
                  <div className="template">
                    <div className="box1">
                        <div className="box2">
                            <img src={val.image} alt="" />
                            <div className="price_container">{val.price}</div> 
                        </div>
                      <div className="name_container">{val.name}</div>
                      <div className="tag_container">{val.tag}</div>           
                      <div className="description_container">{val.description}</div>
                      <div className="box3">
                        <div className="button_container"><Join/></div>
                      </div>
                    </div>
                  </div>
                  </div> 
                )
              })
          }
        </div>
      </div>
    </>
  )
}

export default App;


