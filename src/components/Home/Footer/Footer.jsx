import React from 'react'
import './Footer.css'
import companylogo from '../../../Images/logo.jpg'

const Footer = () => {
    return (
        <>
            <div className='footercontainer'>
                <div className='mainfooter'>
                    <div className='informationfooter'>
                        <img src={companylogo} width={273} height={56.5} alt='companylogo' />
                        <p>Interior Design Center Inc.
                            A USA Based<br /> Photo Editing Company
                            in Tokyo,<br /> Japan. Corporation NO.
                            524172-2,<br />  Check Here</p>
                        <p><i class="bi bi-telephone"></i>&nbsp;&nbsp;  +88(019)04-000014</p>
                        <p><i class="bi bi-envelope"></i>&nbsp;&nbsp;  info.012341588@gmail.com</p>
                    </div>
                    <div className='menufooter'>
                        <h2>Menu</h2>
                        <p>Company</p>
                        <p>Investors</p>
                        <p>Products</p>
                        <p>Jopunral</p>
                        <p>Reach Us</p>
                    </div>
                    <div className='usefullinkfooter'>
                        <h2>Useful link</h2>
                        <p>Home</p>
                        <p>Company</p>
                        <p>Privacy Policy</p>
                        <p>Terms and Conditions</p>
                        <p>Return & Refund</p>
                    </div>
                    <div className='follousfooter'>
                        <h2>Follow Us</h2><br />
                        <i class="bi bi-instagram"></i>
                        <i class="bi bi-facebook"></i>
                        <i class="bi bi-linkedin"></i>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer