import React from 'react';
import './ProfileInfo.css';
import PlaceOutlinedIcon from '@mui/icons-material/PlaceOutlined';
import PhoneOutlinedIcon from '@mui/icons-material/PhoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LaunchOutlinedIcon from '@mui/icons-material/LaunchOutlined';

const ProfileInfo = () => {
  const data = [
    {
      type: "location",
      details: "Kuala Lumpur, Malaysia",
    },
    {
      type: "phone",
      details: "+6018-360-7397",
    },
    {
      type: "email",
      details: "jeremyyytannn.public@gmail.com",
    },
    {
      type: "website",
      details: "https://jeremyytann.github.io",
    },
  ];
  
  return (
    <div>
      {data.map((element, index) => (
        <div className='profile-info-container'>
          <div className='profile-info-image-container'>
            {
              element.type === "location" ? <PlaceOutlinedIcon /> :
              element.type === "phone" ? <PhoneOutlinedIcon /> :
              element.type === "email" ? <EmailOutlinedIcon /> :
              element.type === "website" ? <LaunchOutlinedIcon /> :
              <LaunchOutlinedIcon />
            }
          </div>

          <div className='profile-info-text-container'>
            <span className='profile-info-text'>{element.details}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileInfo