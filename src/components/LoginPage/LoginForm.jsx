import React, { useState } from 'react';
import './LoginForm.css';
import CardIcon from '../../assets/icons/card.png'
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const [cardId, setCardId] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  // TODO- login verification logic
  const userLogin = () => {
    // login loading spinner

    // login verification logic

    // navigation logic
    navigate('/profile/jeremyyytannn');
  }

  return (
    <div className='login-form-container'>
      <div className='login-form-title-container'>
        <span className='login-form-title'>
          LOGIN
        </span>
      </div>

      <div className='login-form-text-field'>
        <div className='login-form-icon-container'>
          <img className='login-form-icon' src={CardIcon} alt='card_icon' />
        </div>

        <div className='login-form-text-container'>
          <input 
            className='login-form-text-input'
            value={cardId}
            onChange={event => setCardId(event.target.value)}
            type='text'
            placeholder='Card ID' />
        </div>
      </div>

      <div className='login-form-text-field'>
        <div className='login-form-icon-container'>
          <PasswordIcon />
        </div>

        <div className='login-form-text-container'>
          <input
            className='login-form-text-input'
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            placeholder='Password' />
        </div>
      </div>

      <div onClick={userLogin} className='login-form-button'>
        <span className='login-form-button-text'>
          Login
        </span>
      </div>
    </div>
  )
}

export default LoginForm