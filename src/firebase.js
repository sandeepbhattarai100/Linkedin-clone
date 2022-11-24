import firebase from 'firebase'
const firebaseConfig = {
    apiKey: "AIzaSyDTBjyXa7x9cJOjW4wJvX4KZHhQmwV6Ur0",
    authDomain: "linkedin-clone-e80d3.firebaseapp.com",
    projectId: "linkedin-clone-e80d3",
    storageBucket: "linkedin-clone-e80d3.appspot.com",
    messagingSenderId: "448275187658",
    appId: "1:448275187658:web:c77bc93066be8a38767133"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };