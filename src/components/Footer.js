import React from 'react'
import '../css/Footer.css'

const Footer = () => {
  let year = new Date().getFullYear()
  return (
    <div className='footer-container'>
        <div>
          <div>
            <p>24/7 Customer Support</p>
          </div>
          <div>
            <p>ffinvestiment@company.com</p>
          </div>
          <div>
            <p>Friendly Support Ticket</p>
          </div>
          <div>
            <p>+156 999 999</p>
          </div>
        </div>
        <div>
          <p>Copyright &copy; {year} financialfreedominvestment. All Rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer