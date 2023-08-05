import React from 'react';
import "./Menu.css"
import Grid from '@mui/material/Grid';
import menuicon from "./images/menu.svg"
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import  property from './images/property.svg';
import car from './images/car.svg';
import fashion from './images/fashion-trend.svg';
import furniture from './images/furniture.svg';
import gadgets from './images/gadgets.svg';
import incoming from './images/incoming-call-on-iphone.svg';
import motorcycl from './images/motorcycle.svg';
import new_job from './images/new-job.svg'
import stepper from './images/stepper-skin-type.svg';
import tools from './images/tools.svg'
import pets from './images/pets.svg'
import { Box } from '@mui/material';



const Menui = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
   
    <Grid className='max-with' sx={{marginTop:"30px"}}  container  columns={{md:10}}>
    <Grid item  md={2}>
      <div  className='menuclsfistmenuu text-left'>


      <Button
        id="basic-button"
        className='btnvnd'
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
         <img src={menuicon} alt='menuicon'></img>
         <div>Menu</div> 
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <Grid container>
            <Grid item xs={6} className='menuRightall'>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={property} alt='property'></img>properties</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={car} alt='property'></img>Cars</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={furniture} alt='property'></img>furniture</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={new_job} alt='property'></img>jobs</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={gadgets} alt='property'></img>electronics & appliances</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={incoming} alt='property'></img>mobiles</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={motorcycl} alt='property'></img>bikes</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={stepper} alt='property'></img>books,sports & hobbies</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={fashion} alt='property'></img>fashion</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={pets} alt='property'></img>pets</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={tools} alt='property'></img>services</Box><ArrowForwardIosIcon/></MenuItem>

            </Grid>
            <Grid item  xs={6} className='menuRightall'>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={property} alt='property'></img>properties</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={car} alt='property'></img>Cars</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={furniture} alt='property'></img>furniture</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={new_job} alt='property'></img>jobs</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={gadgets} alt='property'></img>electronics & appliances</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={incoming} alt='property'></img>mobiles</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={motorcycl} alt='property'></img>bikes</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={stepper} alt='property'></img>books,sports & hobbies</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={fashion} alt='property'></img>fashion</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={pets} alt='property'></img>pets</Box><ArrowForwardIosIcon/></MenuItem>
            <MenuItem onClick={handleClose}><Box sx={{display:"flex",gap:"18px",padding:"7px 0"}}><img src={tools} alt='property'></img>services</Box><ArrowForwardIosIcon/></MenuItem>

            </Grid>
        </Grid>
       
      </Menu>
       
       
      </div>
    </Grid>
    <Grid className='text-left' item   md={2}>
      <div>featured products</div>
    </Grid>
    <Grid className='text-left' item  md={2}>
      <div>Trending products</div>
    </Grid>
    <Grid className='text-left' item  md={2}>
      <div>Customer Service</div>
    </Grid>
    <Grid className='text-left'  item md={2}>
      <div>My Profile</div>
    </Grid>
  </Grid>
  )
}

export default Menui