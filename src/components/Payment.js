import React from 'react'
import cryp1 from '../assets/cryimg1.jpg'
import cryp2 from '../assets/cryimg2.jpg'
import cryp3 from '../assets/cryimg3.jpg'
import cryp4 from '../assets/cryimg4.jpg'

const Payment = () => {
  return (
    <div className='testimonials-container'>
        <div className='payment'>
            <h2>PAYMENT METHOD WE ACCEPT</h2>
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