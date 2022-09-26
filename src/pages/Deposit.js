import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import cryp1 from '../assets/cryimg1.jpg'
import cryp2 from '../assets/cryimg2.jpg'
import cryp3 from '../assets/cryimg3.jpg'
import cryp4 from '../assets/cryimg4.jpg'

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
            <h3>BITCOIN</h3>
            <div>
                <img src={cryp1} alt="" style={{margin: '10px'}}/>
                <p className='last'><Link>ADD FUND</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>TETHER</h3>
            <div>
                <img src={cryp2} alt="" style={{margin: '10px'}}/>
                <p className='last'><Link>ADD FUND</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>ETHERIUM</h3>
            <div>
                <img src={cryp3} alt="" style={{margin: '10px'}}/>
                <p className='last' style={{marginTop: '18%'}}><Link>ADD FUND</Link></p>
            </div>
          </div>    
          <div className='plan-box'>
            <h3>LUNO</h3>
            <div>
                <img src={cryp4} alt="" style={{margin: '10px'}}/>
                <p className='last'><Link>ADD FUND</Link></p>
            </div>
          </div>    
         </div>        
      </div>
    </>
  )
}

export default Withdraw