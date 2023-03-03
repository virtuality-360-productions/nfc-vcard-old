import React, { useState } from 'react';
import ProfileInfo from './ProfileInfo';
import './ProfileInfoLinks.css';
import ProfileLinks from './ProfileLinks';

const ProfileInfoLinks = () => {
  const [selectedTab, setSelectedTab] = useState('info');
  
  const handleTabClicks = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <div className='profile-info-links-container'>
      <div className='profile-info-links-tab-container'>
        {
          selectedTab === 'info' ?
          <div onClick={() => handleTabClicks('info')} className='profile-info-links-tab-active'>
            <span className='profile-info-links-tab-active-text'>Info</span>
          </div> :
          <div onClick={() => handleTabClicks('info')} className='profile-info-links-tab-inactive'>
            <span className='profile-info-links-tab-inactive-text'>Info</span>
          </div>
        }

        {
          selectedTab === 'links' ?
          <div onClick={() => handleTabClicks('links')} className='profile-info-links-tab-active'>
            <span className='profile-info-links-tab-active-text'>Links</span>
          </div> :
          <div onClick={() => handleTabClicks('links')} className='profile-info-links-tab-inactive'>
            <span className='profile-info-links-tab-inactive-text'>Links</span>
          </div>
        }
      </div>

      {
        selectedTab === 'info' ? <ProfileInfo /> : <ProfileLinks />
      }
    </div>
  )
}

export default ProfileInfoLinks