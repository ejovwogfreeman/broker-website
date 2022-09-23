import React from 'react'
import Background from '../components/Background'
import '../css/General.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'

const Support = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Support</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container'>
        <Background text='SUPPORT DESK'/>

      </div>
    </>
  )
}

export default Support