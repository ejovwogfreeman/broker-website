import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { GrHome } from 'react-icons/gr'
import { MdOutlineContacts } from 'react-icons/md'
import { BsTelephone } from 'react-icons/bs'
import { RiQuestionnaireLine } from 'react-icons/ri'
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const Muinavbar = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <div className='mobile-nav'>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)}>
            <AiOutlineMenu style={{color: 'white', fontSize:'30px', backgroundColor: 'rgb(8, 5, 34)', borderRadius: '5px', padding: '3px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon'>
                <AiOutlineClose onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'>
                <Typography variant='h6' component='div'>
                    <li className='li x'><Link to="/" onClick={()=> setOpenDrawer(false)}><GrHome style={{marginRight: '10px'}}/>Home</Link></li>
                    <li className='li x'><Link to="/about" onClick={()=> setOpenDrawer(false)}><MdOutlineContacts style={{marginRight: '10px'}}/>About</Link></li>
                    <li className='li x'><Link to="/faqs" onClick={()=> setOpenDrawer(false)}><RiQuestionnaireLine style={{marginRight: '10px'}}/>FAQ</Link></li>
                    <li className='li x'><Link to="/contact" onClick={()=> setOpenDrawer(false)}><BsTelephone style={{marginRight: '10px'}}/>Contact</Link></li>
                    <li className='li x'><Link to="/login" onClick={()=> setOpenDrawer(false)}><AiOutlineUser style={{marginRight: '10px'}}/>Login</Link></li>
                    <li className='li x'><Link to="/register" onClick={()=> setOpenDrawer(false)}><AiOutlineUserAdd style={{marginRight: '10px'}}/>Register</Link></li>
                </Typography>
            </Box>
        </Drawer>
    </div>
  )
}

export default Muinavbar


