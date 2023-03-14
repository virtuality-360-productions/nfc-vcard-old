import React, { useContext, useEffect, useState } from 'react';
import ProfileEditInfo from './ProfileEditInfo';
import './ProfileEditInfoLinks.css';
import ProfileEditLinks from './ProfileEditLinks';
import { auth, db } from '../../environment/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';

const ProfileEditInfoLinks = () => {
  const [userId, setUserId] = useState('');
  const [infos, setInfos] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedTab, setSelectedTab] = useState('info');
  const { getCurrentUser } = useContext(FirebaseAuthContext);

  useEffect(() => {
    async function fetchUsername() {
      if (getCurrentUser() != null) {
        setUserId(auth.currentUser.uid);
      }
    }

    async function fetchProfileInfo() {
      const cardsRef = collection(db, 'cards');
      const cardQuery = query(cardsRef, where('user_id', '==', userId));
      const cardQuerySnapshot = await getDocs(cardQuery);

      cardQuerySnapshot.forEach(async(doc) => {
        if (doc.exists() && doc.data()) {
          const cardId = doc.data()['id'];

          const infoRef = collection(db, `cards/${cardId}/infos`);
          const infoQuery = query(infoRef);
          const infoQuerySnapshot = await getDocs(infoQuery);

          var tempInfo = [];

          infoQuerySnapshot.forEach((info) => {
            if (info.exists() && info.data()) {
              tempInfo.push(info.data());
            }
          })

          setInfos(tempInfo);

          const linkRef = collection(db, `cards/${cardId}/links`);
          const linkQuery = query(linkRef);
          const linkQuerySnapshot = await getDocs(linkQuery);

          var tempLink = [];

          linkQuerySnapshot.forEach((link) => {
            if (link.exists() && link.data()) {
              tempLink.push(link.data());
            }
          })

          setLinks(tempLink);
        }
      })
    }

    fetchUsername();
    fetchProfileInfo();
  }, [getCurrentUser, userId])
  
  const handleTabClicks = (tabName) => {
    setSelectedTab(tabName);
  }

  return (
    <div className='profile-edit-info-links-container'>
      <div className='profile-edit-info-links-tab-container'>
        {
          selectedTab === 'info' ?
          <div onClick={() => handleTabClicks('info')} className='profile-edit-info-links-tab-active'>
            <span className='profile-edit-info-links-tab-active-text'>Info</span>
          </div> :
          <div onClick={() => handleTabClicks('info')} className='profile-edit-info-links-tab-inactive'>
            <span className='profile-edit-info-links-tab-inactive-text'>Info</span>
          </div>
        }

        {
          selectedTab === 'links' ?
          <div onClick={() => handleTabClicks('links')} className='profile-edit-info-links-tab-active'>
            <span className='profile-edit-info-links-tab-active-text'>Links</span>
          </div> :
          <div onClick={() => handleTabClicks('links')} className='profile-edit-info-links-tab-inactive'>
            <span className='profile-edit-info-links-tab-inactive-text'>Links</span>
          </div>
        }
      </div>

      {
        selectedTab === 'info' ? <ProfileEditInfo infos={infos} /> : <ProfileEditLinks links={links} />
      }
    </div>
  )
}

export default ProfileEditInfoLinks