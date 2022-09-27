import React from 'react'
import cryp1 from '../assets/cryimg1.jpg'
import cryp2 from '../assets/cryimg2.jpg'
import cryp3 from '../assets/cryimg3.jpg'
import cryp4 from '../assets/cryimg4.jpg'
import logo from '../assets/logo.png'

const Payment = () => {
  return (
    <div className='testimonials-container' id='payment-container'>
        <div className='payment'>
        <h2><span><span style={{color: 'rgb(35, 201, 216)'}}>PAYMENT METHOD </span>WE ACCEPT<br/> <img src={logo} width='100px'/></span></h2>
            <div className='cryp'>
              <img src={cryp1} alt="" />
              <img src={cryp2} alt="" />
              <img src={cryp3} alt="" />
              <img src={cryp4} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Payment