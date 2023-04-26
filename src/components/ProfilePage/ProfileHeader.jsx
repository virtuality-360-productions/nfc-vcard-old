import React from 'react';
import './ProfileHeader.css';
import DummyProfilePicture from '../../assets/images/dummy-profile-pic.png';

const ProfileHeader = ({ name, company_name, company_role }) => {
  return (
    <div className='profile-header-container'>
      <div className='profile-picture-container'>
        <img className='profile-picture' src={DummyProfilePicture} alt='dummy-profile-pic' />
      </div>

      <div className='profile-header-text-container'>
        <span className='profile-name-text'>{name ? name : '-'}</span>
        <span className='profile-role-text'>{company_role ? company_role : '-'}</span>
        <span className='profile-company-text'>{company_name ? company_name : '-'}</span>
      </div>
    </div>
  )
}

export default ProfileHeader