import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Investment from '../components/Investment'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div>
      <Navbar/>
      <Header/>
      <Investment/>
      <Plan/>
      <Testimonials/>
      <Footer/>
    </div>
  )
}

export default Home