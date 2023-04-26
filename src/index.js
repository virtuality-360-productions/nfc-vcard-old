import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import FirebaseAuthProvider from './utilities/context/FirebaseAuthContext';
import SnackbarProvider from './utilities/context/SnackbarContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <FirebaseAuthProvider>
    <SnackbarProvider>
      <App />
    </SnackbarProvider>
  </FirebaseAuthProvider>
);
