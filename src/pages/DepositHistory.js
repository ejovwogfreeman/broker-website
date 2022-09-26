import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { TbArrowsDownUp } from 'react-icons/tb' 

const DepositHistory = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Deposit History</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container2'>
        <Background text='DEPOSIT HISTORY'/>
        <div className="body">
          <div className="content">
            <div className="account-stats">
              <h3>DEPOSIT HISTORY</h3>
              <div className="card-show ref-user">
                <div className="form">
                  <div>Show entries:&nbsp;
                    <select>
                      <option value="">10</option>
                      <option value="">25</option>
                      <option value="">50</option>
                      <option value="">100</option>
                    </select>
                  </div>
                  <div>Search:&nbsp;<input type="text" /></div>
                </div>
                <br />
                <div className='form spans'>
                  <small>#&nbsp;ID</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Date</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Transaction ID</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Deposit Method</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Send Amount</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Deposit Charge</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Deposit Amount</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Status</small>
                </div>
                <small style={{textAlign: 'center', display: 'block', borderTop: '3px solid rgba(0, 0, 0, 0.3)', marginTop: '0', paddingTop: '0px'}}>No data available in table</small>
                <br />
                <div className="form">
                  <small>showing 0 of 0 entries</small>
                  <div><BsArrowLeftCircleFill />&nbsp;&nbsp;<BsArrowRightCircleFill /></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default DepositHistory