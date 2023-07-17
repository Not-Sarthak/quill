import React from 'react';
import "../../App.css";
import { useNavigate } from 'react-router-dom';

const Individual = (props) => {
    const navigate=useNavigate();
    function handleClick(){
        navigate(`/details/${props.add}/${props.id}`);
    }

    return (
        <div className="blog-card" onClick={handleClick}>
            <p className="type-blog" style={{marginLeft: "70%", position: "relative", border: "1px solid #97feed", borderRadius: 20, display: "flex", justifyContent: "center", alignItems: "center"}}>{props.type}</p>
            <div className="blog-image">
                <img src={`https://nftstorage.link/ipfs/${props.image}`} alt="banner"/>
            </div>
            <div className="card-data" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <h4>
                    {props.heading}
                </h4>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default Individual