import React from 'react'
import 'react-slideshow-image/dist/styles.css';
import {Zoom} from 'react-slideshow-image';
import skills from '../../images/image-1.jpg';
import carrer from '../../images/image-3.jpg';
import automation from '../../images/image-2.png';
import digital from '../../images/image-4.jpg';
import './Slider.css';


const slideImages = [
    {
        url: skills,
        caption: 'Boost Your Skills'
    },
    {
        url: carrer,
        caption: 'Kick Start Your Carrer'
    },
    {
        url: automation,
        caption: 'Get Your Automation'
    },
    {
        url: digital,
        caption: 'Digital Marketing'
    }
];

const divStyle = {
    display: 'flex',
    height: '500px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
}

const Slider = () => {
  return (
    <div className='slide-container'>
        <Zoom>
            {slideImages.map((image,index)=>{
                return (
                    <div key={index}>
                        <div style={{...divStyle,backgroundImage:`linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)),url(${image.url})`}}>
                            <h1 className='caption' >{image.caption}</h1>
                        </div>
                    </div>
                )
            })}
        </Zoom>
    </div>
  )
}

export default Slider