import React, { useEffect, useState } from 'react';
import ProfileInfo from './ProfileInfo';
import './ProfileInfoLinks.css';
import ProfileLinks from './ProfileLinks';
import { useParams } from 'react-router-dom';
import { db } from '../../environment/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';

const ProfileInfoLinks = () => {
  const { username } = useParams();
  const [infos, setInfos] = useState([]);
  const [links, setLinks] = useState([]);
  const [selectedTab, setSelectedTab] = useState('info');

  useEffect(() => {
    async function fetchProfileInfo() {
      const cardsRef = collection(db, 'cards');
      const cardQuery = query(cardsRef, where('username', '==', username));
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

    fetchProfileInfo();
  }, [username])
  
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
        selectedTab === 'info' ? <ProfileInfo infos={infos} /> : <ProfileLinks links={links} />
      }
    </div>
  )
}

export default ProfileInfoLinks