import React from 'react'
import digitalMarketing from '../../images/digitalMarketing.jpg';
import embedded from '../../images/embedded.jpg';
import websiteDev from '../../images/websiteDev.jpg';
import './digitalmarketing.css';

const DigitalMarketing = () => {
  return (
    <div className='market'>
        <h4 className='digi-market' >DIGITAL MARKETING</h4>
        <div className='prod-desc' >
            <p>Digital Marketing is a latest method of Marketing techniques widely used accross the Globe. Digital Marketing is an online marketing technique and methods used for all products and services through Search Engine and Social media advertisements.</p>
        </div>
        <div className='digi-card'>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={digitalMarketing} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px"}} >Digital Marketing</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={embedded} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px"}}>Embbedded Systems</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={websiteDev} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px"}}>Website Development</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={websiteDev} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px"}}>Website Development</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default DigitalMarketing