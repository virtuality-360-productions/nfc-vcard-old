import { useContext, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { FirebaseAuthContext } from '../context/FirebaseAuthContext';

const ProtectedRoute = ({ children, type }) => {
  const navigate = useNavigate();
  const { getCurrentUser } = useContext(FirebaseAuthContext);

  useEffect(() => {
    if (type === 'user') {
      if (getCurrentUser() === null) {
        navigate('/login');
      }
    }
  }, [getCurrentUser, navigate, type])

  return children ? children : <Outlet />;
}

export default ProtectedRoute