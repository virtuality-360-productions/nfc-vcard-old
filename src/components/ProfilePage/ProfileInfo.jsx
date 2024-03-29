import React, { useEffect, useState } from 'react';
import './ProfileInfo.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

const ProfileInfo = ({ infos }) => {
  return (
    <div>
      { infos ? infos.map((info, index) => (
          <div key={index} className='profile-info-container'>
            <div className='profile-info-image-container'>
              {
                info.type === "location" ? <PlaceOutlinedIcon /> :
                info.type === "phone" ? <PhoneOutlinedIcon /> :
                info.type === "email" ? <EmailOutlinedIcon /> :
                info.type === "website" ? <LaunchOutlinedIcon /> :
                <LaunchOutlinedIcon />
              }
            </div>

            <div className='profile-info-text-container'>
              <span className='profile-info-text'>{info.detail}</span>
            </div>
          </div>
        )) : null
      }
    </div>
  )
}

export default ProfileInfo