import React, { useState } from 'react'
import Background from '../components/Background'
import '../css/General.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'

const Passwordreset = () => {

  const [ email, setEmail ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setEmail('')
  } 

  return (
    <>
      <Helmet>
        <title>FFInvestment | Reset Password</title>
      </Helmet>
      <Navbar />
      <div className='general-container'>
        <Background text='RESET PASSWORD'/>
        <div className="body">
        <form onSubmit={handleSubmit} className='signin-form'>
              <h2>LOGIN FORM</h2>  
              <div>
                <input 
                  type="email" 
                  value={email}
                  onChange={(e)=> setEmail(e.target.value)}
                  placeholder="Enter your Email"
                  required
                />
              </div>
              <button>SEND PASSWORD RESET LINK</button>
              <section style={{marginTop: '20px'}}>
                <small><Link to = '/login'>Go back</Link></small>
              </section>
            </form>
        </div>
      </div>
    </>
  )
}

export default Passwordreset