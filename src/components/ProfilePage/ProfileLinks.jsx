import React from 'react';
import './ProfileLinks.css';
import LinkOutlinedIcon from '@mui/icons-material/LinkOutlined';

const ProfileLinks = () => {
  const data = [
    {
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/jeremyytann/",
    },
    {
      name: "Facebook",
      link: "https://www.facebook.com/tanchiachunj/",
    },
    {
      name: "Portfolio",
      link: "https://tanchiachun-com.firebaseapp.com/",
    },
    {
      name: "Blog",
      link: "https://jeremyytann.github.io",
    },
  ];

  const handleLinkClick = (link) => {
    window.open(link, '_blank');
  }
  
  return (
    <div>
      {data.map((element, index) => (
        <div className='profile-links-container'>
          <div className='profile-links-image-container'>
            <LinkOutlinedIcon />
          </div>

          <div onClick={() => handleLinkClick(element.link)} className='profile-links-text-container'>
            <span className='profile-links-text'>{element.name}</span>
          </div>
        </div>
      ))}
    </div>
  )
}

export default ProfileLinks