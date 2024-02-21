import React from 'react'
import touch from '../../../Images/touch.jpg'
import font1 from '../../../Images/font1.png'
import font2 from '../../../Images/font2.png'
import font3 from '../../../Images/font3.png'
import './Touch.css'

const Touch = () => {
    return (
        <>
            <div className='mainTouch'>
                <div className='maincontainer'>
                    <div className='firsttouch'>
                        <div className='lefttouch'>
                            <h1>Let’s Get In <span>Touch With Us</span> </h1> <br /><br />
                            <p><i class="bi bi-telephone"></i>&nbsp;&nbsp;  +971-05 44 33 88 66</p><br />
                            <p><i class="bi bi-envelope"></i>&nbsp;&nbsp;  info@unifiedinvestment.ae</p><br />
                            <p><i class="bi bi-geo-alt"></i>&nbsp;&nbsp; Unified Investments, 2nd floor, Al Amal St -<br />
                                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Business Bay-Dubai, United Arab Emirates</p>
                        </div>

                        <div className='righttouch'>
                            <img src={touch} width={519} height={464} alt='touch' />
                        </div>
                    </div>
                    <div className='secondtouch'>
                        <h1>Media &<br /> Publications</h1>
                        <img src={font1} width={194} height={80} alt='fontImage' />
                        <img src={font2} width={178} height={80} alt='fontImage' />
                        <img src={font3} width={166} height={90} alt='fontImage' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Touch