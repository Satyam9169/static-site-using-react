import React from 'react'
import './Home.css'
import front from '../../Images/front.jpg'
import social from '../../Images/social.jpg'
import Invest from './Invest/Invest'
import Blog from './Blog/Blog'
import Connect from './Connect/Connect'
import Testimonials from './Testimonials/Testimonials'
import Touch from './Touch/Touch'
import Footer from './Footer/Footer'

const Home = () => {
  return (
    <>
      <div className='mainHome'>
        <div className='container'>
          <div className='left-content'>
            <h1>Empower Your<br /> Business <span className='finance'>Finances</span> </h1><br />
            <p>Your Expert Partner in Swift Business Financing,<br />
              Bridging Gaps, and Ensuring Success. Thrive with<br /> Us!</p><br />
            <h4>Discover More <i class="bi bi-arrow-right"></i></h4>
          </div>
          <div className='right-content'>
            <div className='leftImg'>
              <img src={front} alt='front' />
              <span> <i class="bi bi-arrow-left"></i>
                <i class="bi bi-arrow-right"></i></span>
            </div>
            <div className='rightImg'>
              <img src={social} alt="social" />
            </div>
          </div>
        </div>
      </div>
      <Invest />
      <Blog />
      <Connect />
      <Testimonials />
      <Touch />
      <Footer />
    </>
  )
}

export default Home