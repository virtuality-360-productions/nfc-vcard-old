import React, { useEffect, useState } from 'react';
import VCard from 'vcard-creator';

import './SaveContact.css';
import CollectionsBookmarkOutlinedIcon from '@mui/icons-material/CollectionsBookmarkOutlined';

const SaveContact = ({ name, company_name, company_role, infos, links }) => {
  const myVCard = new VCard();
  const [system, setSystem] = useState('');

  myVCard
    // Add personal data
    .addName(name)
    // Add work data
    .addCompany(company_name)
    .addJobtitle(company_role)

  infos.map((info) => {
    if (info.type === 'email') {
      myVCard.addEmail(info.detail);
    } else if (info.type === 'phone') {
      myVCard.addPhoneNumber(info.detail, 'PREF;WORK')
    } else if (info.type === 'website') {
      myVCard.addURL(info.detail);
    } else if (info.type === 'address') {
      myVCard.addAddress(null, null, info.detail, null, null, null, null);
    }

    return true;
  })

  links.info((link) => {
    myVCard.addURL(link.url);

    return true;
  })

    // .addEmail('jeremyyytannn@gmail.com')
    // .addPhoneNumber('+60134567890', 'PREF;WORK')
    // .addPhoneNumber('+60123456789', 'WORK')
    // .addAddress(null, null, 'Street', 'Town', null, 'Postcode', 'Malaysia')
    // .addSocial('https://twitter.com/tanchiachun', 'Twitter', 'tanchiachun')
    // .addSocial('https://www.facebook.com/tanchiachunj/', 'Facebook', 'Tan Chia Chun')
    // .addURL('http://tanchiachun-com.firebaseapp.com/')

  const getMobileOS = () => {
    var userAgent = navigator.userAgent;
    
    if (userAgent.toString().includes('iPhone')) {
      setSystem('ios');
    } else if (userAgent.toString().includes('Android')) {
      setSystem('android');
    }
  }

  const saveContact = () => {
    if (system === 'ios') {
      const link = document.createElement('a');

      const file = new Blob([myVCard.toString()], {
        type: "text/x-vcard; charset=utf-8"
      });
      
      // link.setAttribute('href', 'https://drive.google.com/uc?export=download&id=1NbUEyJffCnwT20X6pmXuu-fXmu6T1WyU');
      link.setAttribute('href', URL.createObjectURL(file));
      link.setAttribute('download', 'my-contact.vcf');
      link.setAttribute('type', 'text/x-vcard');
      link.click();
    } else if (system === 'android') {
      myVCard.setFormat('vcard');

      const file = new Blob([myVCard.toString()], {
        type: "text/vcard; charset=utf-8"
      });

      const a = document.createElement("a");
      a.rel = 'noreferrer';
      a.href = URL.createObjectURL(file);
      a.download = "vcard.vcf";
      a.click();
    }
  }

  useEffect(() => {
    // prepareVCard();
    getMobileOS();
  }, [])

  return (
    <div onClick={saveContact} className='save-contact-container'>
      <CollectionsBookmarkOutlinedIcon fontSize='small' />

      <span className='save-contact-text'>Save Contact</span>
    </div>
  )
}

export default SaveContact