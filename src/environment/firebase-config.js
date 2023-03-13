import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCXYv5k_PTinpv-bNawgBvGh_8O-gyKJbw",
  authDomain: "v360p-nfc-vcard.firebaseapp.com",
  projectId: "v360p-nfc-vcard",
  storageBucket: "v360p-nfc-vcard.appspot.com",
  messagingSenderId: "337374467351",
  appId: "1:337374467351:web:cd86d1e73b7bd3f036d352",
  measurementId: "G-7BLG2XMYJR"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);