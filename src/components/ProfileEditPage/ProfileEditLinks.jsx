import React from 'react';
import './ProfileEditLinks.css';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const ProfileEditLinks = ({ links }) => {
  const handleOptionClicks = (optionIndex) => {
    console.log(optionIndex);
  }
  
  return (
    <div>
      {links.map((link, index) => (
        <div key={index} className='profile-edit-links-container'>
          <div className='profile-edit-links-image-container'>
            <LinkOutlinedIcon />
          </div>

          <div className='profile-edit-links-text-container'>
            <span className='profile-edit-links-text'>{link.name}</span>
            <MoreHorizOutlinedIcon onClick={() => handleOptionClicks(index)} className='profile-edit-links-option-button' />
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileEditLinks