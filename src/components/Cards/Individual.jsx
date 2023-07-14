import React from 'react';
import "../../App.css";

const Individual = (props) => {
  return (
    <div className="blog-card">
        <div className="blog-image">
            <img src={props.image} alt="banner" />
        </div>
        <div className="card-data">
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