import React from 'react';
import companyLogo from '../../assets/images/company-logo.png';
import './Header.css';

const Header = () => {
  return (
    <div className='header-container'>
      <img className='footer-image' src={companyLogo} alt='company-logo' />
    </div>
  )
}

export default Header