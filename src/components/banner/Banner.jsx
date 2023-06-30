import React from 'react'
import logo from '../../images/logo-banner.png';
import './banner.css';

const Banner = () => {
  return (
    <div className='logo-div'>
        <img src={logo} alt="logo" />
    </div>
  )
}

export default Banner