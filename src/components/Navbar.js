import { useEffect, useState } from 'react';
import React from 'react';
import '../css/Navbar.css'
import { Link } from 'react-router-dom';
import { CgMail } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { AiOutlineUserAdd, AiOutlineUser } from 'react-icons/ai';
import { BiDownArrow, BiUpArrow } from 'react-icons/bi'

const Navbar = () => {

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
              <Link to='/'><CgMail className='icon'/>financialfreedom680@gmail.com</Link>
              <Link to='/' className='left'><MdCall className='icon'/>+2779 985 8789</Link>
          </div>
          <div>
              <Link to='/'><AiOutlineUser className='icon'/>Login</Link>
              <Link to='/' className='left'><AiOutlineUserAdd className='icon'/>Register</Link>
          </div>
      </div>
      <div className="main-nav" id={sticky ? 'sticky' : ''}>
        <h1>Logo</h1>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/">About</Link></li>
          <li><Link to="/">Faq</Link></li>
          <li className='account' >
            <Link to='/' onClick={()=>{toggle()}} className='x'>Account 
                <span>{openButton ? <BiDownArrow className='icon'/> : <BiUpArrow className='icon'/>}</span>
              </Link>
            <div className='auth' id={openButton ? 'auth' : ''}>
                <span><Link to="/">Login</Link></span>
                <span><Link to="/">Register</Link></span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar

