import React, { useState } from 'react'
import Background from '../components/Background'
import '../css/General.css'

const Signup = () => {

  const [ referralId, setReferralId ] = useState('')
  const [ username, setUsername ] = useState('')
  const [ name, setName ] = useState('')
  const [ email, setEmail ] = useState('')
  const [ phoneNumber, setPhoneNumber ] = useState('')
  const [ password, setPassword ] = useState('')
  const [ confirmPassword, setConfirmPassword ] = useState('')


  const handleSubmit = (e) => {
    e.preventDefault()

    setReferralId('')
    setUsername('')
    setName('')
    setEmail('')
    setPhoneNumber('')
    setPassword('')
    setConfirmPassword('')

  } 

  return (
    <div className='general-container'>
      <Background text='REGISTER'/>
      <div className="body">
      <form onSubmit={handleSubmit} className='signup-form'>
            <h2>REGISTER FORM</h2>  
            <div>
              <input 
                type="text" 
                value={referralId}
                onChange={(e)=> setReferralId(e.target.value)}
                placeholder="Referral ID"
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
                type="text"
                value={name}
                onChange={(e)=> setName(e.target.value)}
                placeholder="Enter your Name"
                required
                className='name'
                style={{marginRight: '0px'}}
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
            <div>
              <input 
                type="text" 
                value={password}
                onChange={(e)=> setPassword(e.target.value)}
                placeholder="Enter your Password"
                required
              />
              <input 
                type="email"
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}
                placeholder="Confirm your Passwrod"
                required
              />
            </div>
            <button>REGISTER</button>
          </form>
      </div>
    </div>
  )
}

export default Signup