import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {
  apiKey: "AIzaSyCpIq1UJCOsCFtKHJofjmZlvw4jp-mFRCA",
  authDomain: "psi-financeiro.firebaseapp.com",
  databaseURL: "https://psi-financeiro-default-rtdb.firebaseio.com",
  projectId: "psi-financeiro",
  storageBucket: "psi-financeiro.appspot.com",
  messagingSenderId: "27894972625",
  appId: "1:27894972625:web:401bb2635994e3e65e45f0",
  measurementId: "G-SKVK9GVD5W"
};

// Initialize Firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;