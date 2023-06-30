import React from 'react'
import './header.css';

const Header = () => {
  return (
    <div className='head'>
        <div className='header'>
            <p className='telephone'><i className="bi bi-telephone-fill"></i> +91 8428983975</p>
            <p className='mail'><i className="bi bi-envelope-fill"></i> support@techvoltcoimbatore.com</p>
            <p className='fb'><i className="bi bi-facebook"></i></p>
            <p className='linkedin'><i className="bi bi-linkedin"></i></p>
        </div>
    </div>
  )
}

export default Header