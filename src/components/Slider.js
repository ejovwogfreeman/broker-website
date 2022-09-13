import React from 'react';  
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import img1 from '../assets/img1.jpg'
import img2 from '../assets/img4.jpg'
import img3 from '../assets/img3.jpg'
import '../css/Slider.css'
import Navbar from './Navbar';
import Typed from 'react-typed';
import 'animate.css';

const Slider = () => {
  return (
    <div class='container-fluid' >  
        <Navbar/>          
        <OwlCarousel
            loop={true}
            items={1}
            responsiveRefreshRate={0}
            autoplay={true}
            smartSpeed={1000}
            autoplayTimeout={5000}
            autoplayHoverPause={true}
            nav={true}
            navText={
                [
                    `<div class="left"><</div>`, 
                    `<div class="right">></div>`
                ]
            }
            >
                <div><img  className="img" src= {img1}/></div> 
                <div><img  className="img" src= {img2}/></div>  
                <div><img  className="img" src= {img3}/></div>    
        </OwlCarousel>
        <div id="home" className="typed">
          <h2>Our Services includes</h2>
          <Typed
            className="typed-text"
            strings={[
              'Branding',
              'Project Management',
              'Digital Marketing',
              'Web Development Classes',
            ]}
            typeSpeed={80}
            backSpeed={80}
            loop
          />
        </div> 
    </div>
  )
}

export default Slider