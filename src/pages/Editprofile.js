import React, { useState } from 'react'
import Background from '../components/Background'
import '../css/General.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { FaTelegramPlane } from 'react-icons/fa'
import profilepic from '../assets/default.jpg'

const Editprofile = () => {

  const [ name, setName ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    setName('')
    setUsername('')
    setEmail('')
    setPhoneNumber('')

  } 

  return (
    <>
      <Helmet>
        <title>FFInvestment | Edit Profile</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container'>
        <Background text='EDIT PROFILE'/>
        <div className="body">
        <form onSubmit={handleSubmit} className='signup-form'>
              <h2>EDIT PROFILE</h2>  
              <div style={{flexDirection: 'column', width: '200px', border: '1px solid rgba(0, 0, 0, 0.3)', padding: '0px'}}>
                <img src={profilepic} alt="" style={{ width: '100%', margin: '0px'}}/>
                <button style={{margin: '0px', width: '100%', borderRadius: '0px'}}>Select Image</button>
              </div>
              <div>
                <input 
                  type="text"
                  value={name}
                  onChange={(e)=> setName(e.target.value)}
                  placeholder="Enter your Name"
                  required
                />
                <input 
                  type="text"
                  value={username}
                  onChange={(e)=> setUsername(e.target.value)}
                  placeholder="Enter your Username"
                  required
                />
              </div>
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
                <input 
                  type="text"
                  value={phoneNumber}
                  onChange={(e)=> setPhoneNumber(e.target.value)}
                  placeholder="Enter your Phone Number"
                  required
                />
              </div>
              <button><FaTelegramPlane/>&nbsp;UPDATE PROFILE</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Editprofile