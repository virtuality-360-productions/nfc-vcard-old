import React, { useContext } from 'react';
import './ProfileSettingsNavigator.css';
import { useNavigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';
import { SnackbarContext } from '../../utilities/context/SnackbarContext';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';

const ProfileSettingsNavigator = () => {
  const navigate = useNavigate();

  const handleBack = async(type) => {
    navigate('/profile/edit')
  }

  return (
    <div className='profile-settings-navigator-container'>
      <div className='profile-settings-navigator-subcontainer-l'>
        <ArrowBackRoundedIcon onClick={() => handleBack()} className='profile-settings-navigator-icon' />
      </div>

      <div className='profile-settings-navigator-subcontainer-m'>
        <span className='profile-settings-navigator-title'>Settings</span>
      </div>
    </div>
  )
}

export default ProfileSettingsNavigator