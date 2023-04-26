import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';
import CardPage from './pages/CardPage/CardPage';
import ProfileEditPage from './pages/ProfileEditPage/ProfileEditPage';
import ProtectedRoute from './utilities/routes/ProtectedRoute';
import ProfileSettingsPage from './pages/ProfileSettingsPage/ProfileSettingsPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register/:cardId' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile/:username' element={<ProfilePage />} />

          <Route element={<ProtectedRoute type='user' />}>
            <Route path='/profile/edit' element={<ProfileEditPage />} />
            <Route path='/profile/settings' element={<ProfileSettingsPage />} />
            <Route path='/card/:cardId' element={<CardPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
