import React, { useContext, useState } from 'react';
import './LoginForm.css';
import EmailIcon from '../../assets/icons/email.png'
import PasswordIcon from '@mui/icons-material/Password';
import { useNavigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userLogin } = useContext(FirebaseAuthContext);

  const navigate = useNavigate();

  // TODO- login verification logic
  const submitLogin = async(event) => {
    event.preventDefault();

    // login loading spinner

    // login verification logic
    const user = await userLogin(email, password);

    if (user) {
      navigate('/profile/edit');
    } else {
      // TODO- wrong password dialog

    }
    
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
          <img className='login-form-icon' src={EmailIcon} alt='email_icon' />
        </div>

        <div className='login-form-text-container'>
          <input 
            className='login-form-text-input'
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='email'
            placeholder='Email' />
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

      <div onClick={submitLogin} className='login-form-button'>
        <span className='login-form-button-text'>
          Login
        </span>
      </div>
    </div>
  )
}

export default LoginForm