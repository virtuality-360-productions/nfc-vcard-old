import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage/LandingPage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProfilePage from './pages/ProfilePage/ProfilePage';
import RegisterPage from './pages/RegisterPage/RegisterPage';

function App() {
  return (
    <div className='App'>
      <Router>
        <Routes>
          <Route path='/' element={<LandingPage />} />
          <Route path='/register/:cardId' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/profile/:cardId' element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
