import React from 'react'
import Header from '../components/Header'
import Investment from '../components/Investment'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <div>
      <Header/>
      <Investment/>
      <Plan/>
      <Testimonials/>
    </div>
  )
}

export default Home