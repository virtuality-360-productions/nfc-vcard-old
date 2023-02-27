import React from 'react';
import companyLogo from '../../assets/images/company-logo.png';
import './Footer.css';

const Footer = () => {
  return (
    <div className='footer-container'>
      <div>
        <img className='footer-image' src={companyLogo} alt='company-logo' />
      </div>

      <div>
        <span className='footer-image-text'>Virtuality 360 Productions</span>
      </div>
    </div>
  )
}

export default Footer