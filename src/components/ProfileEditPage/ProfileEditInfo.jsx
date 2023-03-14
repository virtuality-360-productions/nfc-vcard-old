import React from 'react';
import './ProfileEditInfo.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';

const ProfileEditInfo = ({ infos }) => {
  const handleOptionClicks = (optionIndex) => {
    console.log(optionIndex);
  }

  return (
    <div>
      { infos ? infos.map((info, index) => (
          <div key={index} className='profile-edit-info-container'>
            <div className='profile-edit-info-image-container'>
              {
                info.type === "location" ? <PlaceOutlinedIcon /> :
                info.type === "phone" ? <PhoneOutlinedIcon /> :
                info.type === "email" ? <EmailOutlinedIcon /> :
                info.type === "website" ? <LaunchOutlinedIcon /> :
                <LaunchOutlinedIcon />
              }
            </div>

            <div className='profile-edit-info-text-container'>
              <span className='profile-edit-info-text'>{info.detail}</span>
              <MoreHorizOutlinedIcon onClick={() => handleOptionClicks(index)} className='profile-edit-info-option-button' />
            </div>
          </div>
        )) : null
      }
    </div>
  )
}

export default ProfileEditInfo