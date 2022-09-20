import React, { useState } from 'react'
import Background from '../components/Background'
import '../css/General.css'
import { CgMail } from 'react-icons/cg';
import { MdCall, MdLocationOn } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Contact = () => {
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ content, setContent ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setName('')
    setEmail('')
    setContent('')
  } 

  return (
    <div className='general-container'>
      <Background text='CONTACT'/>
      <div className="body">
        <div className="contents">
          <div>
            <h1>GET IN TOUCH</h1>
            <p>Address: <br />
              <MdLocationOn/> 301 Park, Ring Road, London 1207, United Kingdom
            </p>
            <p>Send a Mail: <br />
              <Link to='/'><CgMail className='icon'/>financialfreedom680@gmail.com</Link>
            </p> 
            <p>Call us: <br />
              <Link to='/'><MdCall className='icon'/>+2779 985 8789</Link>
            </p>
          </div>
          <form onSubmit={handleSubmit}>
            <h2>SEND A MESSAGE</h2>  
            <div>
              <input 
                type="text" 
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Enter your Name"
                required
              />
              <input 
                type="email"
                value={email}
                onChange={(e)=> setEmail(e.target.value)}
                placeholder="Enter your Email"
                required
              />
            </div>
            <div>
              <textarea
                value={content}
                onChange={(e)=> setContent(e.target.value)}
                placeholder="Enter your Message"
                required
              />
            </div>  
            <button>SEND MESSAGE</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact