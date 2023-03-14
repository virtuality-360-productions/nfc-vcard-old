import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import ProfileEditHeader from '../../components/ProfileEditPage/ProfileEditHeader';
import ProfileEditInfoLinks from '../../components/ProfileEditPage/ProfileEditInfoLinks';
import ProfileEditNavigator from '../../components/ProfileEditPage/ProfileEditNavigator';
import SaveContact from '../../components/ProfilePage/SaveContact';
import './ProfileEditPage.css';

const ProfileEditPage = () => {
  return (
    <div>
      <Header />
      <ProfileEditNavigator />
      <ProfileEditHeader />
      <SaveContact />
      <ProfileEditInfoLinks />
      <Footer />
    </div>
  )
}

export default ProfileEditPage