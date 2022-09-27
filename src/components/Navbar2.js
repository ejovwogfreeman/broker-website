import { useEffect, useState } from 'react';
import React from 'react';
import '../css/Navbar2.css'
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import logo from '../assets/logo.png'
import Muinavbar2 from './Muinavbar2'

const Navbar2 = () => {

  const [openButton, setOpenButton] = useState(true)
  const [openButton2, setOpenButton2] = useState(true)
  
    const toggle = () => {
      setOpenButton(!openButton)
    }
    const toggle2 = () => {
      setOpenButton2(!openButton2)
    }

  const [sticky, setSticky] = useState(false)

  useEffect(()=> {
      const handleScroll = () => {
          setSticky(window.scrollY > 300)
      }
      window.addEventListener('scroll', handleScroll);
      return () => window.removeEventListener('scroll', handleScroll);
  })

  return (
    <nav>
      <div className='navbarsub-container'>
          <div>
              <span><CgMail className='icon'/>financialfreedom680@gmail.com</span>
              <span className='left'><MdCall className='icon'/>+2779 985 8789</span>
          </div>
          <div className='acc'>
              <Link to='/login'><AiOutlineUser className='icon'/>Login</Link>
              <Link to='/register' className='left'><AiOutlineUserAdd className='icon'/>Register</Link>
          </div>
      </div>
      <div className="main-nav" id={sticky ? 'sticky' : ''}>
        <div><Link to="/"><img src={logo} alt="" /></Link></div>
        <Muinavbar2/>
        <ul>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/investment">Investment</Link></li>
          <li className='account' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{cursor: 'pointer', display: 'inline', marginBottom: '0px' }} onClick={()=>{toggle()}} className='x'>Transaction
                <span>{openButton ? <BiDownArrow className='icon'/> : <BiUpArrow className='icon'/>}</span>
              </p>
            <div className='auth1' id={openButton ? 'auth' : ''}>
                <span><Link to="/deposit">Deposit Fund</Link></span>
                <span><Link to="/deposit-history">Deposit History</Link></span>
                <span><Link to="/withdraw">Withdraw Fund</Link></span>
                <span><Link to="/withdraw-history">Withdraw History</Link></span>
                <span><Link to="/transaction">Transaction Log</Link></span>
            </div>
          </li>
          <li className='account' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{cursor: 'pointer', display: 'inline', marginBottom: '0px' }} onClick={()=>{toggle2()}} className='x'>Hi User 
                <span>{openButton2 ? <BiDownArrow className='icon'/> : <BiUpArrow className='icon'/>}</span>
              </p>
            <div className='auth1 auth2' id={openButton2 ? 'auth' : ''}>
                <span><Link to="/edit-profile">Edit Profile</Link></span>
                <span><Link to="/change-password">Change Password</Link></span>
                <span><Link to="/support">Get Support</Link></span>
                <span><Link to="/login">Logout</Link></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar2

