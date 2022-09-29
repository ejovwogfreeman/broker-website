import React from 'react'
import '../css/Modal.css'
import { Link } from 'react-router-dom'

const Modalbtcdeposit = () => {
  return (
    <div className='modal-container'>
        <div className='modal-box'>
            <h1>btc deposit</h1>
            <Link to='/deposit'>back</Link>
        </div>
    </div>
  )
}

export default Modalbtcdeposit
