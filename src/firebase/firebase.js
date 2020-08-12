import firebase from 'firebase';

// Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyB6KyW7VseeREIQs1gi6P7VXoL2NnwxD9A",
    authDomain: "bookmarks-db-5378d.firebaseapp.com",
    databaseURL: "https://bookmarks-db-5378d.firebaseio.com",
    projectId: "bookmarks-db-5378d",
    storageBucket: "bookmarks-db-5378d.appspot.com",
    messagingSenderId: "342038747662",
    appId: "1:342038747662:web:4e2d35b6f693f056503a5f",
    measurementId: "G-JSHDW0GT28"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  export default firebase;
