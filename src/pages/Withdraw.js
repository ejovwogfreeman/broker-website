import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import cryp1 from '../assets/cryimg1.jpg'
// import cryp2 from '../assets/cryimg2.jpg'
// import cryp3 from '../assets/cryimg3.jpg'
// import cryp4 from '../assets/cryimg4.jpg'

const Withdraw = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Withdraw Funds</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container2'>
        <Background text='WITHDRAW FUNDS'/>
        <div className="body investment withdraw">
          <div className='plan-box'>
            <h3>BANK TRANSFER</h3>
            <div>
                <img src={cryp1} alt="" width='100px'style={{margin: '20px'}}/>
                <p>Minimum - 2500.00 USD</p>
                <p>Maximum - 10000000.00 USD</p>
                <p>Charge - 0 + 0% USD</p>
                <p>Processing Time - 1 Day</p>
                <p className='last'><Link>Withdraw Now</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>BANK TRANSFER</h3>
            <div>
                <img src={cryp1} alt="" width='100px'style={{margin: '20px'}}/>
                <p>Minimum - 2500.00 USD</p>
                <p>Maximum - 10000000.00 USD</p>
                <p>Charge - 0 + 0% USD</p>
                <p>Processing Time - 1 Day</p>
                <p className='last'><Link>Withdraw Now</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>BANK TRANSFER</h3>
            <div>
                <img src={cryp1} alt="" width='100px'style={{margin: '20px'}}/>
                <p>Minimum - 2500.00 USD</p>
                <p>Maximum - 10000000.00 USD</p>
                <p>Charge - 0 + 0% USD</p>
                <p>Processing Time - 1 Day</p>
                <p className='last'><Link>Withdraw Now</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>BANK TRANSFER</h3>
            <div>
                <img src={cryp1} alt="" width='100px'style={{margin: '20px'}}/>
                <p>Minimum - 2500.00 USD</p>
                <p>Maximum - 10000000.00 USD</p>
                <p>Charge - 0 + 0% USD</p>
                <p>Processing Time - 1 Day</p>
                <p className='last'><Link>Withdraw Now</Link></p>
            </div>
          </div>    
         </div>        
      </div>
    </>
  )
}

export default Withdraw