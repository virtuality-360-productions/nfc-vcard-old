import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader';
import SaveContact from '../../components/ProfilePage/SaveContact';
import './ProfilePage.css';

const ProfilePage = () => {
  const { userId } = useParams();

  return (
    <div>
      <Header />
      <ProfileHeader />
      <SaveContact />
      <Footer />
    </div>
  )
}

export default ProfilePage