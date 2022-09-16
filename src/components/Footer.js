import React from 'react'
import '../css/Footer.css'
import { BiSupport } from 'react-icons/bi'
import { BsChat } from 'react-icons/bs'
import { CgMail } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <div className='footer-container'>
        <div className='info'>
          <div className='info-box'>
            <BiSupport className='icon'/>
            <p>24/7 Customer Support</p>
          </div>
          <div className='info-box'>
            <CgMail className='icon'/>
            <p>financialfreedom680@gmail.com</p>
          </div>
          <div className='info-box'>
            <BsChat className='icon'/>
            <p>Friendly Support Ticket</p>
          </div>
          <div className='info-box'>
            <MdCall className='icon'/>
            <p>+2779 985 8789</p>
          </div>
        </div>
        <div className='sub'>
          <p>Copyright &copy; {year} financialfreedominvestment.com... All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer