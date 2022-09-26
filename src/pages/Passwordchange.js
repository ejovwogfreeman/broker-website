import React, { useState } from 'react'
import Background from '../components/Background'
import '../css/General.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'

const Passwordchange = () => {

  const [ password1, setPassword1 ] = useState('')
  const [ password2, setPassword2 ] = useState('')
  const [ password3, setPassword3 ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setPassword1('')
    setPassword2('')
    setPassword3('')
  } 

  return (
    <>
      <Helmet>
        <title>FFInvestment | Change Password</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container'>
        <Background text='CHANGE PASSWORD'/>
        <div className="body">
        <form onSubmit={handleSubmit} className='signin-form'>
              <h2>CHANGE PASSWORD</h2>  
              <div>
                <input 
                  type="password" 
                  value={password1}
                  onChange={(e)=> setPassword1(e.target.value)}
                  placeholder="Enter your Current Password"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  value={password2}
                  onChange={(e)=> setPassword2(e.target.value)}
                  placeholder="Enter Your New Password"
                  required
                />
              </div>
              <div>
                <input 
                  type="password" 
                  value={password3}
                  onChange={(e)=> setPassword3(e.target.value)}
                  placeholder="Confirm Your New Password"
                  required
                />
              </div>
              <button>CHANGE PASSWORD</button>
            </form>
        </div>
      </div>
    </>
  )
}

export default Passwordchange