import React from 'react'
import Background from '../components/Background'
import '../css/General.css'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet'

const Notfound = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | 404 - Not Found</title>
      </Helmet>
      <Navbar/> 
      <div className='general-container'>
        <Background text='PAGE NOT FOUND'/>
          <div className="body">
              <h5 style={{textAlign: 'center'}}> Uh Oooh..Lost your way?...<Link to='/'>Go back Home</Link> </h5>   
          </div>
      </div>
    </>
  )
}

export default Notfound