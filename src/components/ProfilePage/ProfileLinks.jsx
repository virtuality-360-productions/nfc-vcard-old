import React from 'react';
import './ProfileLinks.css';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const ProfileLinks = ({ links }) => {
  const handleLinkClick = (url) => {
    window.open(url, '_blank');
  }
  
  return (
    <div>
      {links.map((link, index) => (
        <div key={index} className='profile-links-container'>
          <div className='profile-links-image-container'>
            <LinkOutlinedIcon />
          </div>

          <div onClick={() => handleLinkClick(link.url)} className='profile-links-text-container'>
            <span className='profile-links-text'>{link.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileLinks