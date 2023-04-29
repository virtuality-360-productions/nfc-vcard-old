import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader';
import ProfileInfoLinks from '../../components/ProfilePage/ProfileInfoLinks';
import SaveContact from '../../components/ProfilePage/SaveContact';
import { useParams } from 'react-router-dom';
import { db } from '../../environment/firebase-config';
import { collection, getDocs, query, where } from 'firebase/firestore';

import './ProfilePage.css';

const ProfilePage = () => {
  const { username } = useParams();
  const [infos, setInfos] = useState([]);
  const [links, setLinks] = useState([]);
  const [name, setName] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyRole, setCompanyRole] = useState('');

  useEffect(() => {
    async function fetchProfileInfo() {
      const cardsRef = collection(db, 'cards');
      const cardQuery = query(cardsRef, where('username', '==', username));
      const cardQuerySnapshot = await getDocs(cardQuery);

      cardQuerySnapshot.forEach(async(doc) => {
        if (doc.exists() && doc.data()) {
          const cardId = doc.data()['id'];
          
          setName(doc.data()['name']);
          setCompanyName(doc.data()['company_name']);
          setCompanyRole(doc.data()['company_role']);

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

  return (
    <div>
      <Header />
      <ProfileHeader name={name} company_name={companyName} company_role={companyRole} />
      <SaveContact name={name} company_name={companyName} company_role={companyRole} infos={infos} links={links} />
      <ProfileInfoLinks infos={infos} links={links} />
      <Footer />
    </div>
  )
}

export default ProfilePage