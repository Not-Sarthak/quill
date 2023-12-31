import React from 'react';
import "../App.css";
import { section7Content } from "../utils/content";
import Title from "../components/Title";
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
import Section5 from './Section5';

const {
  title, subtitle,
} = section7Content;

const Section7 = () => {
  return (
    <div className='section7'>
      <Section5/>
      <div className='main'>
      <Stack className="text" sx={{ height: "100%" }} justifyContent="center">
        <div className='mainTitle'>
            <Title
              variant={{ xs: "custom", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.02em", mb: 1 }}
            >
              {title}
            </Title>
        </div>
        <div className='mainTitle'>
            <Title
              variant={{ xs: "custom", sm: "h2", md: "h1" }}
              sx={{ letterSpacing: "0.02em", mb: 5 }}
            >
              {subtitle}
            </Title>
        </div>
      </Stack>
      <div className='contains' style={{}}>
      <ul className='rows'>
        <li className='row-item'>Easy to use</li>
        <li className='row-item'>Decentralised</li>
        <li className='row-item'>Open source</li>
      </ul>
      <ul className='rows'>
        <li className='row-item'>Stored on Flow Account Storage</li>
        <li className='row-item'>Niftory Walletless Onboarding</li>
        <li className='row-item'>No ads / No trackers</li>
      </ul>
      <ul className='rows'>
        <li className='row-item'>Custom Domain</li>
        <li className='row-item'>Writing NFTs</li>
        <li className='row-item'>Ownership</li>
      </ul>
      </div>
      </div>
    </div>
  )
}

export default Section7