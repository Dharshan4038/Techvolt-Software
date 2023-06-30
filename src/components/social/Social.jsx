import React from 'react'
import './social.css';

const Social = () => {
  return (
    <div className='social'>
        <ul>
            <a href="www.facebook.com" ><i className="bi bi-facebook"></i></a>
            <a href="www.linkedin.com"><i className="bi bi-linkedin"></i></a>
            <a href="www.whatsapp.com"><i className="bi bi-whatsapp"></i></a>
            <a href="www.gmail.com"><i className="bi bi-envelope"></i></a>
        </ul>
    </div>
  )
}

export default Social