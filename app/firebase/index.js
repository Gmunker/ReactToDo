import firebase from 'firebase';

try {
  let config = {
      apiKey: "AIzaSyCGbF4zPTHKArku9Ozw8gYZJotfC2X9RMk",
      authDomain: "gmunker-todoapp.firebaseapp.com",
      databaseURL: "https://gmunker-todoapp.firebaseio.com",
      storageBucket: "gmunker-todoapp.appspot.com",
      messagingSenderId: "358670364679"
    };

    firebase.initializeApp(config);
} catch (e) {

}

export let firebaseRef = firebase.database().ref();
export default firebase;
