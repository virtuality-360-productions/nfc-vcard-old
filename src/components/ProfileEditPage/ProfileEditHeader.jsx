import React from 'react';
import './ProfileEditHeader.css';
import DummyProfilePicture from '../../assets/images/dummy-profile-pic.png';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const ProfileEditHeader = () => {
  return (
    <div className='profile-edit-header-container'>
      <div className='profile-edit-picture-container'>
        <div className='profile-edit-picture-subcontainer-lr'>
        </div>

        <div className='profile-edit-picture-subcontainer-mid'>
          <img className='profile-edit-picture' src={DummyProfilePicture} alt='dummy-profile-edit-pic' />
        </div>
        
        <div className='profile-edit-picture-subcontainer-lr'>
          <MoreHorizOutlinedIcon className='profile-edit-option-button' />
        </div>
      </div>

      <div className='profile-edit-header-text-container'>
        <span className='profile-edit-name-text'>Tan Chia Chun</span>
        <span className='profile-edit-role-text'>Graphic Designer</span>
        <span className='profile-edit-company-text'>Virtuality 360 Productions</span>
      </div>
    </div>
  )
}

export default ProfileEditHeader