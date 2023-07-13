import React from 'react';
import Img from './Img';
import './styles.css';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Headline = () => {
  return (
    <div className="headline">
        <Img />
        <div className="headline-text">
            <h1 className="">Sarthak Shah<KeyboardArrowDownIcon/></h1>
            <p>Test description for my name</p>
        </div>
    </div> 
  )
}

export default Headline