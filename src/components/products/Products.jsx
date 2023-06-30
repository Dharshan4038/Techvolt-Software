import React from 'react';
import './products.css';
import digitalMarketing from '../../images/digitalMarketing.jpg';
import embedded from '../../images/embedded.jpg';
import websiteDev from '../../images/websiteDev.jpg';

const Products = () => {
  return (
    <div className='products'>
        <h4>PRODUCTS & SERVICES</h4>
        <div className='prod-desc' >
            <p>Techvolt Software Pvt Ltd. involved in Software Development (ERP,CRM,HRM,Billing Solutions),Android,Web Desigining, Web Development,IoT (Internet of Things),Embedded Systems,Data Science with Machine Learning,Software Testing and Digital Marketing Servies(SEO).</p>
        </div>
        <div className='prod-card'>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={digitalMarketing} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px",fontWeight:"700"}} >Digital Marketing</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={embedded} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px",fontWeight:"700"}}>Embbedded Systems</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
          <div class="card pcd" style={{width: "16rem",height: "20rem"}}>
              <img src={websiteDev} class="card-img-top" alt="Digital Marketing" style={{height:"230px"}} />
              <div class="card-body">
                <p class="card-text" style={{marginBottom: "8px",fontWeight:"700"}}>Website Development</p>
                <button className='btn btn-success btn-sm'>Get Now</button>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Products