import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyD8a_qyPXl0fJUTDegb4LxCYgmhR6E9fUs",
    authDomain: "clone-27798.firebaseapp.com",
    projectId: "clone-27798",
    storageBucket: "clone-27798.appspot.com",
    messagingSenderId: "639592505127",
    appId: "1:639592505127:web:a18fe7bdf91075f0f21302"
  };
  
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebaseApp.auth();


  export { db, auth };