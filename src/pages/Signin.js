import React, { useState } from 'react'
import Background from '../components/Background'
import { BsEyeFill, BsEyeSlashFill } from 'react-icons/bs'
import '../css/General.css'
import { Link } from 'react-router-dom'

const Signup = () => {

  const [ showPassword, setShowPassword ] = useState(false)
  const handleShow = (e) => {
    e.preventDefault()
    setShowPassword(!showPassword)
  }


  const [ username, setUsername ] = useState('')
  const [ password, setPassword ] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    setUsername('')
    setPassword('')
  } 

  return (
    <div className='general-container'>
      <Background text='LOGIN'/>
      <div className="body">
      <form onSubmit={handleSubmit} className='signin-form'>
            <h2>LOGIN FORM</h2>  
            <div>
              <input 
                type="text" 
                value={username}
                onChange={(e)=> setUsername(e.target.value)}
                placeholder="Enter your Username"
                required
              />
            </div>
            <div>
              <span style={{position: 'relative'}}>
                <input 
                  type={showPassword ? 'password' : 'text' }
                  value={password}
                  onChange={(e)=> setPassword(e.target.value)}
                  placeholder="Enter your Password"
                  required
                />
                <span style={{position: 'absolute', right: '10px', top: '-2px', cursor: 'pointer'}}
                  onClick={handleShow}>{showPassword ? <BsEyeFill /> : <BsEyeSlashFill />}
                </span>
              </span>
            </div>
            <button>LOGIN</button>
            <section style={{marginTop: '20px'}}>
              <small>New here? <Link to = '/register'>Register</Link> | <Link to='/reset-password'>forgot password?</Link></small>
            </section>
          </form>
      </div>
    </div>
  )
}

export default Signup