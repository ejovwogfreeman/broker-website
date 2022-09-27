import React, { useState } from 'react'
import { Drawer, Box, Typography, IconButton } from "@mui/material"
import { AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import { RiHistoryLine } from 'react-icons/ri'
import { AiOutlineBank, AiOutlineTransaction } from 'react-icons/ai';
import { AiOutlineUserDelete } from 'react-icons/ai';
import { GoDashboard } from 'react-icons/go'
import { RiQuestionAnswerLine } from 'react-icons/ri'
import { RiExchangeLine, RiLockPasswordLine } from 'react-icons/ri'
import { GiMoneyStack, GiTakeMyMoney} from 'react-icons/gi'
import { TbHistory } from 'react-icons/tb'

import { Link } from 'react-router-dom'
import '../css/Navbar.css';

const Muinavbar2 = () => {
  const [ openDrawer, setOpenDrawer ] = useState(false)
  return (
    <div className='mobile-nav'>
        <IconButton size="large" edge="start" color="inherit" aria-label='logo' onClick={()=> setOpenDrawer(true)}>
            <AiOutlineMenu style={{color: 'white', fontSize:'30px', backgroundColor: 'rgb(8, 5, 34)', borderRadius: '5px', padding: '3px'}}/>
        </IconButton>
        <Drawer anchor="bottom" open={openDrawer} onClose={()=> setOpenDrawer(false)} >
            <div className='close-icon' id='close-icon-again'>
                <AiOutlineClose onClick={()=> setOpenDrawer(false)}/>
            </div>
            <Box p={1} width='100%' textAlign='left'> 
                <Typography variant='h6' component='div'>
                    <li className='li x'><Link to="/dashboard" onClick={()=> setOpenDrawer(false)}><GoDashboard style={{marginRight: '10px'}}/>Dashboard</Link></li>
                    <li className='li x'><Link to="/investment" onClick={()=> setOpenDrawer(false)}><AiOutlineBank style={{marginRight: '10px'}}/>Investment</Link></li>
                    <li className='li x'><Link to="/deposit" onClick={()=> setOpenDrawer(false)}><GiMoneyStack style={{marginRight: '10px'}}/>Deposit Fund</Link></li>
                    <li className='li x'><Link to="/deposit-history" onClick={()=> setOpenDrawer(false)}><RiHistoryLine style={{marginRight: '10px'}}/>Deposit History</Link></li>
                    <li className='li x'><Link to="/withdraw" onClick={()=> setOpenDrawer(false)}><GiTakeMyMoney style={{marginRight: '10px'}}/>Withdraw Fund</Link></li>
                    <li className='li x'><Link to="/withdraw-history" onClick={()=> setOpenDrawer(false)}><TbHistory style={{marginRight: '10px'}}/>Withdraw History</Link></li>
                    <li className='li x'><Link to="/Transaction" onClick={()=> setOpenDrawer(false)}><AiOutlineTransaction style={{marginRight: '10px'}}/>Transaction Log</Link></li>
                    <li className='li x'><Link to="/edit-profile" onClick={()=> setOpenDrawer(false)}><RiExchangeLine style={{marginRight: '10px'}}/>Edit Profile</Link></li>
                    <li className='li x'><Link to="/change-password" onClick={()=> setOpenDrawer(false)}><RiLockPasswordLine style={{marginRight: '10px'}}/>Change Password</Link></li>
                    <li className='li x'><Link to="/support" onClick={()=> setOpenDrawer(false)}><RiQuestionAnswerLine style={{marginRight: '10px'}}/>Get Support</Link></li>
                    <li className='li x'><Link to="/login" onClick={()=> setOpenDrawer(false)}><AiOutlineUserDelete style={{marginRight: '10px'}}/>Logout</Link></li>
                </Typography>
            </Box>
        </Drawer>
    </div>
  )
}

export default Muinavbar2


