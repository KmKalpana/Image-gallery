// @ts-nocheck
import React from 'react';
import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import headerImg from "../assets/header.jpg"

const header = {
    height: 350,
    backgroundImage: `url(${headerImg})`,
    backgroundPosition: "center center",
    backgroundSize: "cover",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    rowGap: 2,
    p: 2
}

const Header = () => {

    return (
        <Box sx={header}>
            <Typography variant="h4" textAlign="center" fontWeight="bold" color="white">
                Download High Quality Images by creators
            </Typography>
            <Typography variant="subtitle1" textAlign="center" color="white">
                Over 2.4+ million stock images by talented community
            </Typography>
          
        </Box>
    )
}

export default Header
