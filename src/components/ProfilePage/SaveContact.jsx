import React from 'react';
import './SaveContact.css';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';

const SaveContact = () => {
  const saveContact = () => {
    console.log("save contact");
    // iOS
    
    // Android

  }

  return (
    <div onClick={saveContact} className='save-contact-container'>
      <CollectionsBookmarkOutlinedIcon fontSize='small' />

      <span className='save-contact-text'>Save Contact</span>
    </div>
  )
}

export default SaveContact