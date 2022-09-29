import React, {useState} from 'react'
import Background from '../components/Background'
import '../css/General2.css'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { GiCheckMark } from 'react-icons/gi'
import { FaTelegramPlane } from 'react-icons/fa'
import Modals from '../components/Modals'

const Investment = ({modal, openModal}) => {

  return (
    <>
      <Helmet>
        <title>FFInvestment | Investment</title>
      </Helmet>
      <Navbar2 />
      {modal ? <Modals openModal={openModal}/> : ''}
      <div className='general-container2'>
        <Background text='INVESTMENT PACKAGE'/>
        <div className="body investment">
          <div className='plan-box'>
            <h3>STARTER</h3>
            <div>
                <h6>300.00 USD - 75000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 150%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
                <p className='last'><Link onClick={()=>openModal()}><FaTelegramPlane />&nbsp;Invest Under This Package</Link></p>
            </div>
          </div>        
          <div className='plan-box'>
            <h3>SILVER</h3>
            <div>
                <h6>75000.00 USD - 100000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 200%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
                <p className='last'><Link onClick={()=>openModal()}><FaTelegramPlane />&nbsp;Invest Under This Package</Link></p>
            </div>
          </div>   
          <div className='plan-box'>
            <h3>GOLD</h3>
            <div>
                <h6>100000.00 USD - 1250000.00 USD</h6>
                <p><GiCheckMark />&nbsp;Commission - 300%</p>
                <p><GiCheckMark />&nbsp;Repeat - 1 times</p>
                <p><GiCheckMark />&nbsp;Compound - Weekly</p>
                <p className='last'><Link onClick={()=>openModal()}><FaTelegramPlane />&nbsp;Invest Under This Package</Link></p>
            </div>
          </div>   
        </div>        
      </div>
    </>
  )
}

export default Investment