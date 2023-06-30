import React from 'react'
import digitalMarketing from '../../images/digitalMarketing.jpg';
import embedded from '../../images/embedded.jpg';
import websiteDev from '../../images/websiteDev.jpg';
import './internship.css';

const Internship = () => {
  return (
    <div className='products internship'>
        <h4>INTERNSHIPS</h4>
        <div className='intern-desc' >
            <p>Internship is a platform where students can gain real time experience on their carrer development. Internship is a temporary job oppertunity to expand our skills as per the Industry demand. Internship provides full time employment, part time employment for students. Techvolt Software Pvt Ltd offers Internship to students on various domains !</p>
        </div>
        <div className='prod-card'>
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
        </div>
        <button className='btn btn-sm btn-primary'>View More</button>
    </div>
  )
}

export default Internship