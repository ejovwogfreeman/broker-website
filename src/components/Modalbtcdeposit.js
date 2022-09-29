import React from 'react'
import '../css/Modal.css'
import { Link } from 'react-router-dom'

const Modalbtcdeposit = () => {
  return (
    <div className='modal-container'>
        <div className='modal-box deposit' style={{overflowY: 'scroll'}}>
            <h1>Deposit using bitcoin</h1>
            <div>
              <h3>Wallet Address</h3>
              <p>qwertyui12345678</p>
            </div>
            <form style={{textAlign: 'left'}}>
              <label>Deposit Plan</label>
              <select>
                <option>starter</option>
                <option>siler</option>
                <option>gold</option>
              </select>
            <h3>DEPOSIT PROOF</h3>
            <input type='file'></input>
            </form>
            <Link to='/deposit'>back</Link>
        </div>
    </div>
  )
}

export default Modalbtcdeposit
