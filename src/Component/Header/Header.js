import React from 'react';
import { Box, Typography } from '@mui/material';
import "./Header.css";
import uzaonline from './images/uzaoonline.png';
import doc from "./images/doc.svg";
import down from "./images/down.svg";
import sel from "./images/down.svg";

export const Header = () => {
  return (
    <>
      <Box className="HeaderComponent" sx={{ display: "flex", justifyContent: "space-between", margin: "10px 30px 0",alignItems:"center" }}>
        <Box><img src={uzaonline} alt='logo' /></Box>
        <Box sx={{display:"flex", gap:"23px"}}>
          <Box>
          <img src={down} alt='down' />
            <Typography variant='body1' gutterBottom>
        sign
      </Typography>
          </Box>
          
         
           <Box>
           <img src={doc} alt='doc' />
            <Typography variant='body1'>Registration</Typography>
           </Box>
           
        
            <Box>
            <img src={sel} alt='sel' />
            <Typography variant='body1'>Sell</Typography>
            </Box>
        
          
        </Box>
      </Box>
    </>
  );
};
