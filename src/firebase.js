import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyD6zdKo2pYtOaFvsIPCkEgG0Q3arZESDJY',
  authDomain: 'linkedin-clone-ruddyautem.firebaseapp.com',
  projectId: 'linkedin-clone-ruddyautem',
  storageBucket: 'linkedin-clone-ruddyautem.appspot.com',
  messagingSenderId: '189966376052',
  appId: '1:189966376052:web:1edc1f4a900453415a4521',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };