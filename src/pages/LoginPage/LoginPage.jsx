import React, { useContext, useEffect } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginPage/LoginForm';
import './LoginPage.css';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const { getCurrentUser } = useContext(FirebaseAuthContext);

  useEffect(() => {
    async function checkUserStatus() {
      if (getCurrentUser() !== null) {
        navigate('/profile/edit');
      }
    }
  
    checkUserStatus();
  }, [getCurrentUser, navigate])

  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default LoginPage