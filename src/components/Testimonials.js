import React from 'react'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import '../css/Testimonials.css'
import img from '../assets/cryptobg.jpg'
import logo from '../assets/logo.png'
import { AiFillStar } from 'react-icons/ai'

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='owl-container'>
        <h2><span>WHAT PEOPLE <span style={{color: 'rgb(35, 201, 216)'}}>SAY</span> <br/> <img src={logo} width='100px'/></span></h2>
            <OwlCarousel
            loop={true}
            items={1}
            responsiveRefreshRate={0}
            autoplay={true}
            smartSpeed={1000}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            // nav={true}
            // navText={
            //     [
            //         `<div class="prev"><</div>`, 
            //         `<div class="next">></div>`
            //     ]
            // }
            >
                <div>
                  <img  className="img" src= {img} style={{width: '200px', height: '200px', margin: 'auto'}} alt='graphics'/>
                  <h3>John Doe</h3>
                  <strong>Business Analyst</strong>
                  <div className='icon-cont'><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/><AiFillStar/></div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus, eos quidem debitis assumenda molestiae tempora fugit totam labore qui consectetur est nihil asperiores ipsum reiciendis inventore aliquid temporibus perferendis quae tempore, laboriosam explicabo libero a! Praesentium, enim modi! Illum commodi dicta nesciunt quis quasi esse recusandae expedita, cumque quisquam itaque!
                  </p>
                </div> 
        </OwlCarousel>
        </div>
    </div>
  )
}

export default Testimonials