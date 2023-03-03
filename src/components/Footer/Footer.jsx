import React from 'react';
import { useNavigate } from 'react-router-dom';
import companyLogo from '../../assets/images/company-logo.png';
import './Footer.css';

const Footer = () => {
  const navigate = useNavigate();
  
  const routeLoginPage = () => {
    navigate('/');
  }

  return (
    <div className='footer-container'>
      <div>
        <img onClick={() => routeLoginPage()} className='footer-image' src={companyLogo} alt='company-logo' />
      </div>

      <div>
        <span className='footer-image-text'>Virtuality 360 Productions</span>
      </div>
    </div>
  )
}

export default Footer