import React, { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = useContext(FirebaseAuthContext);

  useEffect(() => {
    async function checkUserStatus() {
      if (getCurrentUser() !== null) {
        navigate('/profile/edit');
        // const userId = auth.currentUser.uid;
        // const cardsRef = collection(db, 'cards');
        // const cardQuery = query(cardsRef, where('user_id', '==', userId));
        // const cardQuerySnapshot = await getDocs(cardQuery);
      
        // cardQuerySnapshot.forEach((doc) => {
        //   if (doc.exists() && doc.data()) {
        //     const username = doc.data()['username'];
  
        //     navigate(`/profile/${username}`);
        //   }
        // })
      } else {
        navigate('/login');
      }
    }
  
    checkUserStatus();
  }, [getCurrentUser, navigate])
  
  return (
    <div>
      <Header />
      Landing Page
      <Footer />
    </div>
  )
}

export default LandingPage