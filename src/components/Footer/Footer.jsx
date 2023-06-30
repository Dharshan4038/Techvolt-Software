import React from 'react';
import './footer.css';


const Footer = () => {
  return (
    <footer className='footer'>
        <div className='foot'>
            <div className='sub-foot'>
                <div className='sft1' >
                    <h5>TECHVOLT SOFTWARE PVT.LTD</h5>
                    <p>Coimbatore, Tamil Nadu,India</p>
                    <p>www.techvoltcoimbatore.com</p>
                    <p>+91 8428 983 975</p>
                </div>
                <div className='sft2'>
                    <h5>QUICK LINKS</h5>
                    <p>Home</p>
                    <p>Digital Marketing</p>
                    <p>Internships</p>
                    <p>Services</p>
                    <p>Carrer</p>
                    <p>Contact Us</p>
                </div>
            </div>
            <div className='sub-foot ft2'>
                <div className='sft1'>
                    <h5>GET INTERNSHIP</h5>
                    <p>Apply for Internships offered by</p>
                    <p>Techvolt Pvt.Ltd</p>
                    <button className='btn btn-primary btn-sm'>View More</button>
                </div>
                <div className='sft2'>
                    <h5>CONTACT US</h5>
                    <p>support@techvoltcoimbatore.com</p>
                    <p><i className="bi bi-facebook"></i> <i className="bi bi-linkedin"></i> <i className="bi bi-envelope"></i></p>
                </div>
            </div>
        </div>
        <div className='copyright'>
            <p style={{textAlign:"center",marginTop: "10px",marginBottom:"30px"}}>Copyright &copy; 2023 TECHVOLT SOFTWARE PVT.LTD All rights reserved</p>
        </div>
    </footer>
  )
}

export default Footer