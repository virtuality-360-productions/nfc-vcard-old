import React, { useContext } from 'react';
import './ProfileEditNavigator.css';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import { useNavigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../environment/firebase-config';

const ProfileEditNavigator = () => {
  const navigate = useNavigate();
  const { getCurrentUser, userLogout } = useContext(FirebaseAuthContext);

  const handleButtonClicks = async(type) => {
    if (type === 'logout') {
      const user = await getCurrentUser();
      
      const cardsRef = collection(db, 'cards');
      const cardQuery = query(cardsRef, where('user_id', '==', user.uid));
      const cardQuerySnapshot = await getDocs(cardQuery);

      cardQuerySnapshot.forEach(async(doc) => {
        if (doc.exists()) {
          await userLogout();
          
          navigate(`/profile/${doc.data()['username']}`);
        }
      })
    } else if (type === 'settings') {
      navigate('/profile/settings');
    }
  }

  return (
    <div className='profile-edit-navigator-container'>
      <div className='profile-edit-navigator-subcontainer-l'>
        
      </div>

      <div className='profile-edit-navigator-subcontainer-m'>
        <span className='profile-edit-navigator-title'>EDIT MODE</span>
      </div>

      <div className='profile-edit-navigator-subcontainer-r'>
        <SettingsOutlinedIcon onClick={() => handleButtonClicks('settings')} className='profile-edit-navigator-icon' />
        <LogoutOutlinedIcon onClick={() => handleButtonClicks('logout')} className='profile-edit-navigator-icon' />
      </div>
    </div>
  )
}

export default ProfileEditNavigator