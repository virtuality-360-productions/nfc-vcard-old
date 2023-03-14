import React from 'react';
import './ProfileHeader.css';
import DummyProfilePicture from '../../assets/images/dummy-profile-pic.png';

const ProfileHeader = () => {
  return (
    <div className='profile-header-container'>
      <div className='profile-picture-container'>
        <img className='profile-picture' src={DummyProfilePicture} alt='dummy-profile-pic' />
      </div>

      <div className='profile-header-text-container'>
        <span className='profile-name-text'>Tan Chia Chun</span>
        <span className='profile-role-text'>Graphic Designer</span>
        <span className='profile-company-text'>Virtuality 360 Productions</span>
      </div>
    </div>
  )
}

export default ProfileHeader