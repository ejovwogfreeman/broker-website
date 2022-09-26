import React from 'react'
import Background from '../components/Background'
import '../css/General2.css'
// import { Link } from 'react-router-dom'
import Navbar2 from '../components/Navbar2'
import { Helmet } from 'react-helmet'
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from 'react-icons/bs'
import { TbArrowsDownUp } from 'react-icons/tb' 

const Suppoty = () => {
  return (
    <>
      <Helmet>
        <title>FFInvestment | Support</title>
      </Helmet>
      <Navbar2 />
      <div className='general-container2'>
        <Background text='SUPPORT'/>
        <div className="body">
          <div className="content">
            <div className="account-stats">
            <span className='support-span'><h3 style={{borderRadius: '0px', padding: '0px'}}>SUPPPORT TICKET STATUS</h3><button>+ OPEN NEW SUPPORT TICKET</button></span>
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
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Type</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Amount</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Post Balance</small>
                  <small style={{display: 'flex', alignItems: 'center'}}><TbArrowsDownUp />&nbsp;Details</small>
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

export default Suppoty