import React from 'react'
import Header from '../../components/Header/Header'
import Footer from '../../components/Footer/Footer'
import ProfileSettingsNavigator from '../../components/ProfileSettingsPage/ProfileSettingsNavigator'

const ProfileSettingsPage = () => {
  return (
    <div>
      <Header />
      <ProfileSettingsNavigator />
      
      <Footer />
    </div>
  )
}

export default ProfileSettingsPage