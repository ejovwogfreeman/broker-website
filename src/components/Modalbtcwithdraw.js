import React from 'react'
import '../css/Modal.css'
import { Link } from 'react-router-dom'

const Modalbtcwithdraw = () => {
  return (
    <div className='modal-container'>
        <div className='modal-box'>
            <h1>btc withdraw</h1>
            <Link to='/deposit'>back</Link>
        </div>
    </div>
  )
}

export default Modalbtcwithdraw
