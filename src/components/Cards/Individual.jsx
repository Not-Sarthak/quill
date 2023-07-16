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
            <div className="blog-image">
                <img src={`https://nftstorage.link/ipfs/${props.image}`} alt="banner" />
            </div>
            <div className="card-data">
                <h4>
                    {props.heading}
                </h4>
                <p>
                    {props.text}
                </p>
                <p>{props.type}</p>
            </div>
        </div>
    )
}

export default Individual