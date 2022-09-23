import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { FaRecycle, FaRegMoneyBillAlt } from 'react-icons/fa'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { TbArrowsDownUp } from 'react-icons/tb' 

const Dashboard = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Dashboard</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container2'>
        <Background text='YOUR DASHBOARD'/>
        <div className="body">
          <div className="content">
            <div className="account-stats">
              <h3>Account Statistics</h3>
              <div className="card-show">
                <div className="card">
                  <div className="card-head">
                    <FaRegMoneyBillAlt className='icon'/>
                    <h5>$ 3500</h5>
                  </div>
                  <div className="card-tail">
                    <small>Total Deposits / Current Balance</small>
                    <BsArrowRightCircleFill/>
                  </div>
                </div>
                <div className="card">
                  <div className="card-head">
                    <FaRecycle className='icon'/>
                    <h5>$ 0</h5>
                  </div>
                  <div className="card-tail">
                    <small>Total Withdras</small>
                    <BsArrowRightCircleFill/>
                  </div>
                </div>
              </div>
            </div>
            <br />
            <div className="account-stats">
              <h3>Reference User</h3>
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
                <div className='form'>
                  <small>#&nbsp;ID</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Register Date</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Username</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Name</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Email</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Phone Number</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Status</small>
                </div>
                <small style={{textAlign: 'center', display: 'block', borderTop: '3px solid rgba(0, 0, 0, 0.3)', marginTop: '10px', paddingTop: '10px'}}>No data available in table</small>
                <br />
                <div className="form">
                  <small>showing 0 of 0 entries</small>
                  <div><BsArrowLeftCircleFill />&nbsp;&nbsp;<BsArrowRightCircleFill /></div>
                </div>
              </div>
            </div>
            <br />
            <div className="account-stats">
              <h3>YOUR REFERRAL LINK: &nbsp; &nbsp; Number OF YOUR REFERRALS USER : 0</h3>
              <div className="card-show">
                  <form action="">
                    <input type="text" />
                    <button>COPY TO CLIPBOARD</button>
                  </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Dashboard