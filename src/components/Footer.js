import React from 'react'
import { AiFillFacebook, AiFillInstagram, AiFillTwitterSquare } from 'react-icons/ai'
import { MdOutgoingMail, MdAddIcCall } from 'react-icons/md'
import '../css/Footer.css'
import Links from './Links'

const Footer = () => {
  return (
    <div>
    <Links/>
    <div className='footer-container'>
        <footer>
            <div>
                <h3>Ready to discuss your project with us?</h3>
                <ul className='social'>
                    <li><a href=""><AiFillFacebook/></a></li>
                    <li><a href=""><AiFillInstagram/></a></li>
                    <li><a href=""><AiFillTwitterSquare/></a></li>
                    <li><a href=""><MdOutgoingMail/></a></li>
                    <li><a href=""><MdAddIcCall/></a></li>
                </ul>
            </div>
            <div>
                <h3>About Us</h3>
                <ul>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Our Vision</a></li>
                    <li><a href="">Get in touch</a></li>
                </ul>
            </div>
            <div>
                <h3>Support System</h3>
                <ul>
                    <li><a href="">Our Story</a></li>
                    <li><a href="">Our Mission</a></li>
                    <li><a href="">Our Vision</a></li>
                    <li><a href="">Get in touch</a></li>
                </ul>
            </div>
            <div>
                <h3>What We Do</h3>
                <ul>
                    <li>Branding</li>
                    <li>Project Management</li>
                    <li>Digital Marketing</li>
                    <li>Web development classes</li>
                </ul>
            </div>
        </footer>
        <p>Benin City, Edo State, Nigeria.</p>
    </div>
    </div>
  )
}

export default Footer