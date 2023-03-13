import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
// import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader';
import ProfileInfoLinks from '../../components/ProfilePage/ProfileInfoLinks';
import SaveContact from '../../components/ProfilePage/SaveContact';
import { db } from '../../environment/firebase-config';
import './ProfilePage.css';


const ProfilePage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();

  // TODO- check if users initiated their account
  // if not, route them to login and initiate accounts
  useEffect(() => {
    async function fetchCardDetails() {
      const cardsRef = collection(db, `cards`);
      const cardQuery = query(cardsRef, where('id', '==', cardId));
      const cardQuerySnapshot = await getDocs(cardQuery);
    
      cardQuerySnapshot.forEach((doc) => {
        if (doc.exists()) {
          if (!doc.data()['userEmail']) {
            // TODO- add dialog to navigate user to register page
            navigate(`/register/${cardId}`);
          } else {
            navigate(`/profile/${doc.data()['username']}`);
          }
        }
      })
    }
  
    fetchCardDetails();
  }, [cardId, navigate])
  

  return (
    <div>
      <Header />
      <ProfileHeader />
      <SaveContact />
      <ProfileInfoLinks />
      <Footer />
    </div>
  )
}

export default ProfilePage