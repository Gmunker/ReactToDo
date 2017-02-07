import firebase from 'firebase';

let config = {
    apiKey: "AIzaSyCGbF4zPTHKArku9Ozw8gYZJotfC2X9RMk",
    authDomain: "gmunker-todoapp.firebaseapp.com",
    databaseURL: "https://gmunker-todoapp.firebaseio.com",
    storageBucket: "gmunker-todoapp.appspot.com",
    messagingSenderId: "358670364679"
  };
  firebase.initializeApp(config);
let firebaseRef = firebase.database().ref();

firebaseRef.set({
  app: {
    name: 'Todo Application',
    version: 1.3
  },
  isRunning: true,
  user: {
    name: "Greg",
    age: 37
  }
})

let todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
  console.log('Todo-Added', snapshot.key, snapshot.val());
});

todosRef.push({text: "DO something 1st"});
todosRef.push({text: "Do something else 2nd"});


// ARRAY SUB FOR DATA IN firebaseRef
////////////////////////////////////

// {
//   id(key): {
//     text: "do something"
//   }
// }

// let notesRef = firebaseRef.child('notes');
//
// notesRef.on('child_added', (snapshot) => {
//   console.log('Child-Added', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_changed', (snapshot) => {
//   console.log('Child-Changed', snapshot.key, snapshot.val());
// });
//
// notesRef.on('child_removed', (snapshot) => {
//   console.log('Child-Removed', snapshot.key, snapshot.val());
// });
//
// let newNoteRef = notesRef.push({
//   text:"Walk the Dog!"
// });
//
// console.log(newNoteRef.key);



// FETCHING DATA
////////////////

// firebaseRef.once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value');
// })

// firebaseRef.child('app').once('value').then((snapshot) => {
//   console.log('Got entire database', snapshot.key, snapshot.val());
// }, (e) => {
//   console.log('Unable to fetch value');
// })

// LISTENING TO DATA
////////////////////
// firebaseRef.on('value', (snapshot) => {
//   console.log('Got Value', snapshot.val());
// });
// firebaseRef.off();
//
// firebaseRef.update({isRunning: false});

// firebaseRef.child('user').on('value', (snapshot) => {
//   console.log('Updating just the user information', snapshot.val());
// });
//
// firebaseRef.update({
//   'user/name': 'April',
//   'user/age': 43,
//   'app/name': 'Something new'
// });

// UPDATING DATA
////////////////
//firebaseRef.update({
//  isRunning: false,
//  'app/name': 'Todo App'
//});

//firebaseRef.child('app').update({
//  name: 'Todo App!'
//})

// firebaseRef.child('app').update({name: 'Todo Applic'});
// firebaseRef.child('user').update({name: "Anestasia"});


// REMOVING DATA
////////////////
//firebaseRef.child('app/name').remove();

// firebaseRef.child('app').update({
//   version: 2.0,
//   name: null
// })

// firebaseRef.update({isRunning: null});
// firebaseRef.child('user/age').remove();
