import React from 'react'
import '../css/Modal.css'
import { AiOutlineClose } from 'react-icons/ai'
import { Link } from 'react-router-dom'

const Modals = ({openModal}) => {
  return (
    <div className='modal-container'>
        <div className='modal-box'>
            <span>
              <h1>Hello, ready to invest?</h1>
              <AiOutlineClose onClick={()=>openModal()} className='icon'/>
            </span>
            <Link to='/deposit'>continue to deposit</Link>
        </div>
    </div>
  )
}

export default Modals
