import React from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import RegisterForm from '../../components/RegisterPage/RegisterForm';
import './RegisterPage.css';

const RegisterPage = () => {
  const { cardId } = useParams();

  return (
    <div>
      <Header />
      <RegisterForm cardId={cardId} />
      <Footer />
    </div>
  )
}

export default RegisterPage