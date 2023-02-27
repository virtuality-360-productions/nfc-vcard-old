import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LandingPage.css';

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // TODO - login verification
    const user = localStorage.getItem('userId');

    if (user) {
      navigate('/admin');
    } else {
      navigate('/login');
    }
  }, [navigate])
  
  return (
    <div>
    </div>
  )
}

export default LandingPage