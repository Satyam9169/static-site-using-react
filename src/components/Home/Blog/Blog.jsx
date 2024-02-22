import React from 'react'
import b1 from '../../../Images/b1.jpg'
import b2 from '../../../Images/b2.jpg'
import b3 from '../../../Images/b3.jpg'
import './Blog.css'

const Blog = () => {
  return (
    <>
      <div className='mainblog'>

        <div className='blogcontainer'>

          <div className='maincontent'>


            {/* first above part of the blog container */}
            <div className='firstcontent'>
              <h1>OUR <span>BLOGS</span></h1>
              <p>We provide our investors with fully-managed, high-yield investment products
                catering to all levels of risk appetite. Our team has
                the expertise to provide all of our investors with the education,
                guidance and support required to maximize profits both from a short
                and long-term perspective through their entire investment journey.</p>
            </div>


            {/* second below part of the blog container */}
            <div className='secondcontent'>

              {/* this is left side of the secondcontent part */}
              <div className='left'>
                <img src={b2} width={522} height={523} alt='b2' />

                <div className='heading'>
                  <span>
                    <h4>DEVELOPMENT</h4>
                    <p>11March 2023</p>
                  </span>

                  <h2>Best Website to research for your  next project</h2><br />
                  <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs</p>
                  <h3>Read More...</h3>
                </div>


              </div>


              {/* this is middle side of the secondcontent part */}
              <div className='middle'>

                <img src={b1} width={319} height={261} alt='b1' />
                <div className='midcontent'>

                  {/* up heading */}
                  <div className='midupcontent'>
                    <h6>DEVELOPMENT</h6>
                    <p>11March 2023</p>
                  </div>

                  {/* below content */}

                  <div className='middowncontent'>
                    <h3>Best Website to research for your  next project</h3><br />
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs</p>
                    <br />
                    <h4>Read More...</h4>
                  </div>
                </div>
              </div>



              {/* this is right side of the secondcontent part */}
              <div className='right'>

                <div className='rightcontent'>

                  {/* up heading */}
                  <div className='rightupcontent'>
                    <h6>DEVELOPMENT</h6>
                    <p>11March 2023</p>
                  </div>

                  {/* below content */}

                  <div className='rightdowncontent'>
                    <h3>Best Website to research for your  next project</h3><br />
                    <p>Capitalize on low hanging fruit to identify a ballpark value added activity to beta test. Override the digital divide with additional clickthroughs</p><br />
                    <h4>Read More...</h4>
                  </div>
                </div>
                <img src={b3} width={319} height={261} alt='b1' />
              </div>
            </div>
            <button className='btn'>Explore More</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog