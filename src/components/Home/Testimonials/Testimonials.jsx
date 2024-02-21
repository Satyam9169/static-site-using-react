import React from 'react'
import t1 from '../../../Images/t1.jpg'
import t2 from '../../../Images/t2.jpg'
import dot from '../../../Images/dot.jpg'
import line from '../../../Images/line.jpg'
import './Testimonials.css'

const Testimonials = () => {
    return (
        <>
            <div className='maintestimonial'>
                <div className='secondmonial'>

                    <h1>TESTIMONIALS</h1>

                    <div className='alltestmonial'>
                        <div className='leftside'>

                            <img src={t1} width={75} height={75} alt='woman' />

                            <div className='leftmonial'>
                                <i class="bi bi-quote"></i><br />
                                &#9734;&#9734;&#9734;&#9734;&#9734;
                                <p>Is be upon sang fond must shew.
                                    Really boy law county she unable
                                    her sister. Feet you off its like
                                    like six. Among sex are leave law
                                    built now <br /><br />
                                    <h2>John H</h2><br />
                                    <p>CEO GetNextDesign</p>
                                </p>
                            </div>
                        </div>

                        <div className='line'>
                            <img src={line} width={5} height={305} alt='line' />
                        </div>

                        <div className='rightside'>

                            <img src={t2} width={75} height={75} alt='women' />
                            <div className='rightmonial'>
                                <i class="bi bi-quote"></i><br />
                                &#9734;&#9734;&#9734;&#9734;&#9734;
                                <p>Is be upon sang fond must shew.
                                    Really boy law county she unable
                                    her sister. Feet you off its like
                                    like six. Among sex are leave law
                                    built now. <br /><br />
                                    <h2>Danial H</h2><br />
                                    <p>Design</p>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='dot'>
                        <img src={dot} width={27} height={7} alt='dot' />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonials