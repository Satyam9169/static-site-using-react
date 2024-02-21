import React from 'react'
import './Invest.css';

const Invest = () => {
    return (
        <>
        <div className='Investcontainer'>

            <div className='backInvest'>
                <div className='left-Investcontent'>
                    <h1>INVEST IN <span>DUBAI</span></h1>
                    <p>We provide our investors with fully-managed, high-yield investment
                        products catering to all levels of risk appetite. Our team has the
                        expertise to provide all of our investors with the education, guidance
                        and support required to maximize profits both from a short and long-term
                        perspective through their entire investment journey.
                    </p>
                </div>

                <div className='right-Investcontent'>
                    <div className='box-1'>
                        <h4>High Fixed Returns</h4>
                        <p>Build your wealth with a personalised,<br />
                            diversified portfolio with expert<br />
                            advice. </p>
                    </div>
                    <div className='box-2'>
                        <h4>Outperforming Market</h4>
                        <p>Earn returns that are greater than the<br />
                            market average with minimal risk and <br />
                            a broader risk profile, we've proudly<br />
                            been beating the market since 2016<br />
                            for our clients. </p>
                    </div>
                    <div className='box-3'>
                        <h4>Get Funded</h4>
                        <p>Operating under a model of profit<br />
                            sharing, we make money when our <br />
                            investors make money and our<br />
                            success depends on your success</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default Invest