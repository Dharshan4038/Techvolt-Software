import React from 'react';
import './statistics.css';

const Statistics = () => {
  return (
    <div className='stat-container'>
        <h1>STATISTICS</h1>
        <div className='stat'>
            <div className='cont'>
                <h4>89 +</h4>
                <p>Projects Done</p>
            </div>
            <div className='cont'>
                <h4>12</h4>
                <p>MOU</p>
            </div>
            <div className='cont'>
                <h4>982 +</h4>
                <p>Intern Offered</p>
            </div>
            <div className='cont'>
                <h4>491 +</h4>
                <p>Photos Taken</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics