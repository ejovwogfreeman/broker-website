import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { MdPermContactCalendar } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { MdOutlineMiscellaneousServices } from 'react-icons/md'
import { MdComputer } from 'react-icons/md'
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const Muinavbar = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <div className='mobile-nav'>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)}>
            <AiOutlineMenu style={{color: 'black', fontSize:'30px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon'>
                <AiOutlineClose onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'>
                <Typography variant='h6' component='div'>
                    <li className='li x'><Link to="/" onClick={()=> setOpenDrawer(false)}><MdPermContactCalendar  style={{marginRight: '10px'}}/>Home</Link></li>
                    <li className='li x'><Link to="/about" onClick={()=> setOpenDrawer(false)}><MdOutlineMiscellaneousServices style={{marginRight: '10px'}}/>About</Link></li>
                    <li className='li x'><Link to="/faqs" onClick={()=> setOpenDrawer(false)}><MdComputer style={{marginRight: '10px'}}/>FAQ</Link></li>
                    <li className='li x'><Link to="/contact" onClick={()=> setOpenDrawer(false)}><MdComputer style={{marginRight: '10px'}}/>Contact</Link></li>
                    <li className='li x'><Link to="/login" onClick={()=> setOpenDrawer(false)}><BsTelephone style={{marginRight: '10px'}}/>Login</Link></li>
                    <li className='li x'><Link to="/register" onClick={()=> setOpenDrawer(false)}><BsTelephone style={{marginRight: '10px'}}/>Register</Link></li>
                </Typography>
            </Box>
        </Drawer>
    </div>
  )
}

export default Muinavbar


