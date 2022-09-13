import React, {useState, useEffect} from 'react'
import logo from '../assets/teknesiswhite.png'
import '../css/Navbar.css'

const Navbar = () => {
    const [sticky, setSticky] = useState(false)

    useEffect(()=> {
        const handleScroll = () => {
            setSticky(window.scrollY > 200)
            console.log(window.scrollY)
        }
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    })

  return (
    <nav className={sticky ? 'sticky' : ''}>
        <img src={logo} alt="" className='logo'/>
        <ul>
            <li><a href="">Home</a></li>
            <li><a href="">About</a></li>
            <li><a href="">Projects</a></li>
            <li><a href="" className='contact'> <span>Contact</span> </a></li>
        </ul>
    </nav>
  )
}

export default Navbar