import React from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import LoginForm from '../../components/LoginPage/LoginForm';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <LoginForm />
      <Footer />
    </div>
  )
}

export default LoginPage