import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../Images/logo.jpg';
import './Navbar.css';

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);

  return (
    <>
    <div className='mainnav'>
    <nav className='navbar'>
      <div className='left-navlink'>
        <Link to={'/'} className='logo'>
          <img src={logo} alt='logo' />
        </Link>
      </div>

      <div className={isMobile ? "nav-links-mobile" : "right-navlink"} onClick={() => setIsMobile(false)}>

        <ul className='nav-links'>
          <Link to={'/company'} className='company'>
            <li>COMPANY</li>
          </Link>
        </ul>

        <ul className='nav-links'>
          <li className="dropdown">
            <span className="investor">INVESTOR<i class="bi bi-chevron-down"></i></span>
            <ul className="dropdown-content">
              <Link to={'/investor/investor1'}>Investor 1</Link>
              <Link to={'/investor/investor2'}>Investor 2</Link>
              <Link to={'/investor/investor3'}>Investor 3</Link>
            </ul>
          </li>
        </ul>

        <ul className='nav-links'>
          <li className="dropdown">
            <span className="products">PRODUCTS<i class="bi bi-chevron-down"></i></span>
            <ul className="dropdown-content">
              <Link to={'/products/product1'}>Product 1</Link>
              <Link to={'/products/product2'}>Product 2</Link>
              <Link to={'/products/product3'}>Product 3</Link>
            </ul>
          </li>
        </ul>

        <ul className='nav-links'>
          <Link to={'/journal'} className='journal'>
            <li>JOURNAL</li>
          </Link>
        </ul>

        <ul className='nav-links'>
          <Link to={'/reachus'} className='reachus'>
            <li>REACHUS</li>
          </Link>
        </ul>

      </div>
      <button className='mobile-menu-icon'
        onClick={() => setIsMobile(!isMobile)}>
        {isMobile ? (<i class="bi bi-x-lg"></i>) :
          (<i class="bi bi-list"></i>)}
      </button>
    </nav>
    </div>
    </>
  )
}

export default Navbar;
