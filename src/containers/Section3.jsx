import React from 'react';
import "../App.css";
import {
  Box,
  Button,
  Container,
  Hidden,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { section3Content } from "../utils/content";
import images from '../utils/content';
import {motion} from 'framer-motion';
import { useRef, useEffect, useState } from 'react';
import Title from "../components/Title";
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

const {
  Image1, Image2, Image3, Image4, Image5, title, titlebelow,
} = section3Content;

// 1280 x 1920
const Section3 = () => {

  const [width, setwidth] = useState(0);
  const carousel = useRef();
  useEffect(() => {
    //console.log(carousel.current.scrollWidth, carousel.current.offsetWidth);
    setwidth(carousel.current.scrollWidth - carousel.current.offsetWidth)
  },[]);

  // console.log(images);
  return (
    <div className="section3">
      <Stack sx={{ height: "100%" }} justifyContent="center">
        <div className='mainTitle'>
            <Title
              variant={{ xs: "custom", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.02em", mb: 1 }}
            >
              {title}
            </Title>
        </div>
        <div className='belowTitle'>
            <Title className="titlebelow"
              variant={{ xs: "custom", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.02em", mb: 1 }}
            >
              {titlebelow}
            </Title>
        </div>
      </Stack>
      <div className="arrow">
      <motion.div ref={carousel} className="carousel" whileTap={{cursor: "grabbing"}}>
        <motion.div drag="x" dragConstraints={{right: 0, left: -width}} className="inner-carousel">
          {images.map(image => {
            return (
              <motion.div className="item" key={image}>
                <img src={image} alt="" />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
      <ArrowRightIcon fontSize='large' sx={{mt:"13%"}}/>
      </div>
    </div>
  )
}

export default Section3