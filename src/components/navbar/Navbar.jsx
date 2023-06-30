import { useRef } from 'react';
import React from 'react';
import { FaBars, FaTimes } from "react-icons/fa";
import './navbar.css';

const Navbar = () => {

  const navRef = useRef();

	const showNavbar = () => {
		navRef.current.classList.toggle(
			"responsive_nav"
		);
	};


  return (
   <header>
        {/* <h3 style={{visibility:"hidden"}} >Logo</h3> */}
        <nav ref={navRef}>
          <a href="/#" className='hm'>Home</a>
          <a href="/#">About</a>
          <a href="/#" className='pd' >Products</a>
          <a href="/#" className='sr'>Services</a>
          <a href="/#" className='it'>Internships</a>
          <a href="/#">Blog</a>
          <a href="/#" className='dm'>Digital Marketing</a>
          <a href="/#">Carrer</a>
          <a href="/#" className='ct'>Contact</a>
          <button
            className="nav-btn nav-close-btn"
            onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button
          className="nav-btn bar-btn"
          onClick={showNavbar}>
          <FaBars />
        </button>
   </header>
  )
}

export default Navbar