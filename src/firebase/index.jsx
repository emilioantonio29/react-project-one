  import firebase from 'firebase/app';
  import "@firebase/firestore"
  
  
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const app = firebase.initializeApp ({
    apiKey: "AIzaSyCXIsHEwOSNhAtMq-aJi7tFDP2NQeUJy6s",
    authDomain: "react-project-one-94b74.firebaseapp.com",
    projectId: "react-project-one-94b74",
    storageBucket: "react-project-one-94b74.appspot.com",
    messagingSenderId: "141192838573",
    appId: "1:141192838573:web:d65fcdb246a7ec9d443524",
    measurementId: "G-6RSY1CZFTP"
  });
  // Initialize Firebase
  
  // firebase.analytics();

  // instalar firebase: npm

  export const getFirebase = () => {
    return app;
  }

  export const getFirestore = () => {
    return firebase.firestore(app);
  }