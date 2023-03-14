import { collection, getDocs, query, where } from 'firebase/firestore';
import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import { db } from '../../environment/firebase-config';

const CardPage = () => {
  const navigate = useNavigate();
  const { cardId } = useParams();

  // TODO- check if users initiated their account
  // if not, route them to login and initiate accounts
  useEffect(() => {
    async function fetchCardDetails() {
      const cardsRef = collection(db, 'cards');
      const cardQuery = query(cardsRef, where('id', '==', cardId));
      const cardQuerySnapshot = await getDocs(cardQuery);
    
      cardQuerySnapshot.forEach((doc) => {
        if (doc.exists()) {
          if (!doc.data()['user_id']) {
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

  // TODO- initializing page
  return (
    <div>
      <Header />
        Redirecting you to the page
      <Footer />
    </div>
  )
}

export default CardPage