import React, { useContext, useState } from 'react';
import './RegisterForm.css';
import EmailIcon from '../../assets/icons/email.png'
import PasswordIcon from '@mui/icons-material/Password';
import UserIcon from '../../assets/icons/user.png'
import { useNavigate } from 'react-router-dom';
import { doc, setDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../environment/firebase-config';
import { FirebaseAuthContext } from '../../utilities/context/FirebaseAuthContext';

const RegisterForm = ({ cardId }) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { userRegister } = useContext(FirebaseAuthContext);

  const navigate = useNavigate();

  // TODO- register verification logic
  const submitRegistration = async() => {
    const user = await userRegister(email, password);
    const userId = user['user']['uid'];

    // check valid cardId

    // register loading spinner

    // register user and store data
    const userRef = doc(db, 'users', userId);
    // const userRef = doc(db, 'users', email);

    await setDoc(userRef, {
      id: userId,
      card: cardId,
      email: email,
      password: password,
    }).then(result => {
      const cardRef = doc(db, 'cards', cardId);

      updateDoc(cardRef, {
        username: username,
        user_id: userId,
      })
    }).catch(error => {
      console.log(error);
    })

    // navigation logic
    navigate(`/profile/${username}`);
  }

  return (
    <div className='register-form-container'>
      <div className='register-form-title-container'>
        <span className='register-form-title'>
          REGISTER
        </span>
      </div>

      <div className='register-form-text-field'>
        <div className='register-form-icon-container'>
          <img className='register-form-user-icon' src={UserIcon} alt='email_icon' />
        </div>

        <div className='register-form-text-container'>
          <input 
            className='register-form-text-input'
            value={username}
            onChange={event => setUsername(event.target.value)}
            type='text'
            placeholder='Username' />
        </div>
      </div>

      <div className='register-form-text-field'>
        <div className='register-form-icon-container'>
          <img className='register-form-icon' src={EmailIcon} alt='email_icon' />
        </div>

        <div className='register-form-text-container'>
          <input 
            className='register-form-text-input'
            value={email}
            onChange={event => setEmail(event.target.value)}
            type='email'
            placeholder='Email' />
        </div>
      </div>

      <div className='register-form-text-field'>
        <div className='register-form-icon-container'>
          <PasswordIcon />
        </div>

        <div className='register-form-text-container'>
          <input
            className='register-form-text-input'
            value={password}
            onChange={event => setPassword(event.target.value)}
            type='password'
            placeholder='Password' />
        </div>
      </div>

      <div onClick={submitRegistration} className='register-form-button'>
        <span className='register-form-button-text'>
          Register
        </span>
      </div>
    </div>
  )
}

export default RegisterForm