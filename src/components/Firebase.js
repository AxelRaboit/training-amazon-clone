import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyC8MBCNq7jgfp-C4Nd-GG59EQ8iKgZNqAU",
    authDomain: "amazooon-clone-16421.firebaseapp.com",
    projectId: "amazooon-clone-16421",
    storageBucket: "amazooon-clone-16421.appspot.com",
    messagingSenderId: "578403360021",
    appId: "1:578403360021:web:24a1df65eb27b5ea215d1c"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export { db, auth };