import React from 'react'
import { Box, Typography } from '@mui/material';
import "./Banner.css"
import bannerleft from "./images/banner-left.png"
import bannerright from "./images/banner-right.png"
export const Banner = () => {
  return (
    <>
    <Box sx={{display:"flex",backgroundColor:"#D74E16",justifyContent:"space-between",alignItems:"center",padding:"0 40px"}}>
        <Box sx={{marginBottom:"-3px",marginTop:"38px"}}>
          <img src={bannerleft} alt="banner-left-img"></img>
        </Box>
            <Box sx={{flexGrow:3}}>
               <Box sx={{display:"flex",justifyContent:"center",alignItems:"center",marginBottom:"70px",gap:"10px"}}> 
                <Typography variant='span' className='banner-Find'>Find Anyting</Typography>
                <Typography variant='span' className='banner-location-box'>
                <svg xmlns="http://www.w3.org/2000/svg" width="33" height="33" viewBox="0 0 33 33" fill="none"> <rect width="33" height="33" fill="white"/> <path d="M16.5031 16.1562C17.1656 16.1562 17.7318 15.9203 18.2016 15.4485C18.6714 14.9767 18.9062 14.4095 18.9062 13.7469C18.9062 13.0844 18.6703 12.5182 18.1985 12.0484C17.7267 11.5786 17.1595 11.3437 16.4969 11.3437C15.8344 11.3437 15.2682 11.5797 14.7984 12.0515C14.3286 12.5233 14.0938 13.0905 14.0938 13.7531C14.0938 14.4156 14.3297 14.9818 14.8015 15.4516C15.2733 15.9214 15.8405 16.1562 16.5031 16.1562ZM16.5 27.5344C19.5479 24.7615 21.7995 22.2464 23.2547 19.9891C24.7099 17.7318 25.4375 15.7437 25.4375 14.025C25.4375 11.3256 24.5748 9.11539 22.8493 7.39423C21.1239 5.67308 19.0075 4.8125 16.5 4.8125C13.9925 4.8125 11.8761 5.67308 10.1507 7.39423C8.42522 9.11539 7.5625 11.3256 7.5625 14.025C7.5625 15.7437 8.30729 17.7318 9.79688 19.9891C11.2865 22.2464 13.5208 24.7615 16.5 27.5344ZM16.5 30.25C12.8104 27.1104 10.0547 24.1943 8.23281 21.5016C6.41094 18.8089 5.5 16.3167 5.5 14.025C5.5 10.5875 6.60573 7.84896 8.81719 5.80937C11.0286 3.76979 13.5896 2.75 16.5 2.75C19.4104 2.75 21.9714 3.76979 24.1828 5.80937C26.3943 7.84896 27.5 10.5875 27.5 14.025C27.5 16.3167 26.5891 18.8089 24.7672 21.5016C22.9453 24.1943 20.1896 27.1104 16.5 30.25Z" fill="black"/> </svg><span>kenya</span>
                </Typography>
               </Box>
               <Box className="banner-search-parent">
                <input className='banner-middle-search' type='text'></input><svg xmlns="http://www.w3.org/2000/svg" width="31" height="29" viewBox="0 0 31 29" fill="none">
<path d="M25.4674 25.375L15.5592 16.1061C14.8057 16.717 13.9272 17.1927 12.9236 17.5334C11.92 17.8741 10.8521 18.0444 9.71979 18.0444C7.00322 18.0444 4.70412 17.1634 2.82247 15.4012C0.940823 13.6391 0 11.5127 0 9.02222C0 6.53171 0.94184 4.40538 2.82552 2.64323C4.7092 0.881076 6.98845 0 9.66328 0C12.3381 0 14.6111 0.881076 16.4822 2.64323C18.3533 4.40538 19.2889 6.53348 19.2889 9.02751C19.2889 10.0343 19.1131 11.0076 18.7615 11.9474C18.4098 12.8872 17.8824 13.7683 17.1792 14.5906L27.125 23.8243L25.4674 25.375ZM9.68212 15.9299C11.7228 15.9299 13.4573 15.2544 14.8858 13.9034C16.3142 12.5524 17.0285 10.9253 17.0285 9.02222C17.0285 7.1191 16.3142 5.49204 14.8858 4.14106C13.4573 2.79008 11.7228 2.11458 9.68212 2.11458C7.62054 2.11458 5.86819 2.79008 4.42507 4.14106C2.98197 5.49204 2.26042 7.1191 2.26042 9.02222C2.26042 10.9253 2.98197 12.5524 4.42507 13.9034C5.86819 15.2544 7.62054 15.9299 9.68212 15.9299Z" fill="#D74E16"/>
</svg>
               </Box>
            </Box>
            <Box sx={{marginBottom:"-11px"}}>
            <img src={bannerright} alt="banner-right-img"></img>
            </Box>
    </Box>
    </>
  )
}
