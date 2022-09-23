import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { GiCheckMark } from 'react-icons/gi'
import { GrSend } from 'react-icons/gr'

const Investment = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Investment</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container2'>
        <Background text='OUR INVESTMENT PACKAGE'/>
        <div className="body investment">
          <div className='plan-box'>
            <h3>STARTER</h3>
            <div>
                <h6>300.00 USD - 75000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 150%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
            </div>
            <Link><GrSend />&nbsp;Invest Under This Package</Link>
          </div>        
          <div className='plan-box'>
            <h3>STARTER</h3>
            <div>
                <h6>300.00 USD - 75000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 150%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
            </div>
            <Link><GrSend />&nbsp;Invest Under This Package</Link>
          </div>        
          <div className='plan-box'>
            <h3>STARTER</h3>
            <div>
                <h6>300.00 USD - 75000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 150%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
            </div>
            <Link><GrSend />&nbsp;Invest Under This Package</Link>
          </div>        
        </div>        
      </div>
    </>
  )
}

export default Investment