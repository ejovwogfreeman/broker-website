import React from 'react'
import Header from '../components/Header'
import Investment from '../components/Investment'
import Plan from '../components/Plan'
import Testimonials from '../components/Testimonials'
import Navbar from '../components/Navbar'
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>FFInvestment | Home</title>
      </Helmet>
      <Navbar/>
      <Header/>
      <Investment/>
      <Plan/>
      <Testimonials/>
    </div>
  )
}

export default Home