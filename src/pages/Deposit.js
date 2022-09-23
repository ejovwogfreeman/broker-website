import React from 'react'
import Background from '../components/Background'
import '../css/General.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'

const Deposit = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Deposit Funds</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container'>
        <Background text='DEPOSIT FUNDS'/>

      </div>
    </>
  )
}

export default Deposit