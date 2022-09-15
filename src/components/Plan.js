import React from 'react';
import { CgMail } from 'react-icons/cg';
import { MdCall } from 'react-icons/md';
import { Link } from 'react-router-dom';

const Plan = () => {
  return (
    <div className='plan-container'>
        <h1>OUR AWESOME PLANS</h1>
        <p>The site is owned by maxlo investment company. A registered company for cryptocurrency investments solution. We give a chance to new, dynamically developing ICO projects that bring huge profits in an amazing short time. Join Us by choosing one of our plans today.</p>
        <div>
            <div>
                <h1>STARTER</h1>
                <p>WEEKLY 150% FOR 1 TIMES</p>
                <h3>$ 37650</h3>
                <div>
                    <div><p>Minimum</p><p>$300.00</p></div>
                    <div><p>Maximum</p><p>$75000.00</p></div>
                    <div><p>Per time</p><p>$56475.00</p></div>
                    <div><p>Total Return</p><p>$56475.0</p></div>
                </div>
            </div>
            <div>
                <h1>SILVER</h1>
                <p>WEEKLY 200% FOR 1 TIMES</p>
                <h3>$ 87500</h3>
                <div>
                    <div><p>Minimum</p><p>$75000.00</p></div>
                    <div><p>Maximum</p><p>$100000.00</p></div>
                    <div><p>Per time</p><p>$175000.00</p></div>
                    <div><p>Total Return</p><p>$175000.0</p></div>
                </div>
            </div>
            <div>
                <h1>STARTER</h1>
                <p>WEEKLY 300% FOR 1 TIMES</p>
                <h3>$ 675000</h3>
                <div>
                    <div><p>Minimum</p><p>$10000.00</p></div>
                    <div><p>Maximum</p><p>$1250000.00</p></div>
                    <div><p>Per time</p><p>$2025000.00</p></div>
                    <div><p>Total Return</p><p>$2025000.0</p></div>
                </div>
            </div>
        </div>
        <div>
            <div>
                <h3>HAVE A QUESTION</h3>
                <p>WE ARE HERE TO HELP!</p>
                <div>
                    <Link to='/'><CgMail className='icon'/>ffinvestiment@company.com</Link>
                    <Link to='/' className='left'><MdCall className='icon'/>+156 999 999</Link>
                </div>
            </div>
            <div>
                10% <br />
                REFERRAL <br />
                COMMISSION <br />
            </div>
        </div>
    </div>
  )
}

export default Plan