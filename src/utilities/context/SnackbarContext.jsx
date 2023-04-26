import { Alert, Snackbar } from '@mui/material';
import React, { createContext, useState } from 'react'

export const SnackbarContext = createContext();

const SnackbarProvider = ({ children }) => {
  const [snackbar, setSnackbar] = useState(false);
  const [borderColor, setBorderColor] = useState('green');
  const [hideDuration, setHideDuration] = useState(0);
  const [severity, setSeverity] = useState('success');
  const [message, setMessage] = useState('');

  const toggleSnackbar = (hideDuration, severity, message) => {
    setHideDuration(hideDuration);
    setSeverity(severity);

    if (severity === 'success') {
      setBorderColor('green');
    } else if (severity === 'error') {
      setBorderColor('darkred');
    }

    setMessage(message);
    setSnackbar(true);
  }

  const handleClose = () => {
    setSnackbar(false);
  }

  const methods = { toggleSnackbar };

  return (
    <SnackbarContext.Provider value={ methods }>
      { children }

      <Snackbar className='logout-snackbar'
        open={snackbar} onClose={handleClose} autoHideDuration={hideDuration}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
        <Alert 
          severity={severity} auto="true" 
          sx={{ width: '100%', justifyContent: 'center', border: 1, borderColor: borderColor }}>
          {message}
        </Alert>
      </Snackbar>
    </SnackbarContext.Provider>
  )
}

export default SnackbarProvider