// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyC283Ih23Aj0LCue7YPUpwR7HT1VCFfm6c',
  authDomain: 'hardy-lightning-393810.firebaseapp.com',
  projectId: 'hardy-lightning-393810',
  storageBucket: 'hardy-lightning-393810.appspot.com',
  messagingSenderId: '568264579541',
  appId: '1:568264579541:web:f5c6dd593356475469c55c',
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
