import { useEffect, useState } from 'react';
import React from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'
import logo from '../assets/logo.png'
import Muinavbar from './Muinavbar'

const Navbar = () => {

  let user = true;

  const [openButton, setOpenButton] = useState(true)
  
    const toggle = () => {
      setOpenButton(!openButton)
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
        <div><Link to="/"><img src={logo} alt="" width='60px'/></Link></div>
        <Muinavbar/>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/faqs">FAQ</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          {!user ? <li className='account' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{cursor: 'pointer', display: 'inline', marginBottom: '0px' }} onClick={()=>{toggle()}} className='x'>Account 
                <span>{openButton ? <BiDownArrow className='icon'/> : <BiUpArrow className='icon'/>}</span>
              </p>
            <div className='auth' id={openButton ? 'auth' : ''}>
                <span><Link to="/login">Login</Link></span>
                <span><Link to="/register">Register</Link></span>
            </div>
          </li> :
          <li className='account' style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <p style={{cursor: 'pointer', display: 'inline', marginBottom: '0px' }} onClick={()=>{toggle()}} className='x'>Hi User 
                <span>{openButton ? <BiDownArrow className='icon'/> : <BiUpArrow className='icon'/>}</span>
              </p>
            <div className='auth' id={openButton ? 'auth' : ''}>
                <span><Link to="/dashboard">Dashboard</Link></span>
                <span><Link to="/login">Logout</Link></span>
            </div>
          </li>}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

