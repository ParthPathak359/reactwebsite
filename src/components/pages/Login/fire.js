import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyB-vDYih44gd38rklsIesGsGkCOCOqZ42A",
    authDomain: "auth-development-dbbc1.firebaseapp.com",
    projectId: "auth-development-dbbc1",
    storageBucket: "auth-development-dbbc1.appspot.com",
    messagingSenderId: "906326561427",
    appId: "1:906326561427:web:1e50d12b2ed3acde327366"
  };

  const fire = firebase.initializeApp(config);
  export default fire;