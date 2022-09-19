import React from 'react'
import '../css/Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header-container">
      <div>
        <h1>Financial <span style={{color: 'rgb(35, 201, 216)'}}>Freedom</span><br /> Investment Company</h1>
        <p>We develop effective plans to move our customers. <br />
          Trade global financial markets with maximum profit... </p>
        <Link to='/'>Start now</Link>
      </div>
    </div>
  )
}

export default Header