import React from 'react'
import { Link } from 'react-router-dom'
import '../css/Investment.css'

const Investment = () => {
  return (
    <div className='investment-container'>
        <div className='access'>
            <h2>GET ACCESS TO YOUR ACCOUNT</h2>
            <div>
                <Link to='/'>SIGN IN</Link>
                <Link to='/'>REGISTER</Link>
            </div>
        </div>
        <div className='how'>
            <h2>HOW FINANCIAL FREEDOM INVESTMENT WORKS</h2>
            <div className='how-grid'>
                <div>
                    <h3>Sign up</h3>
                    <p>Sign up as a new user with your Personal details.</p>
                </div>
                <div>
                    <h3>Deposit & invest</h3>
                    <p>Deposit money to wallet and invest on a plan that suites you</p>
                </div>
                <div>
                    <h3>Get Profits</h3>
                    <p>Get your Profit as stated on plan, your account will credited automatically</p>
                </div>
                <div>
                    <h3>Withdraw</h3>
                    <p>You can Withdraw once trading session is completed and wait for processing.</p>
                </div>
            </div>
        </div>
        <div className='track'>
            <h1>Fast-track <br /> your success</h1>
            <div>
                <p>Register with Maxlo to start earning more</p> <br />
                <Link to='/'>CREATE AN ACCOUNT</Link>
            </div>
        </div>
    </div>
  )
}

export default Investment