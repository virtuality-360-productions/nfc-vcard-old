import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProfileHeader from '../../components/ProfilePage/ProfileHeader';
import ProfileInfoLinks from '../../components/ProfilePage/ProfileInfoLinks';
import SaveContact from '../../components/ProfilePage/SaveContact';

import './ProfilePage.css';

const ProfilePage = () => {
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