import firebase  from "firebase"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAs-FrNlbAjitf4mRZ-yB2yWsnJEKpe7Nc",
    authDomain: "clone-544a4.firebaseapp.com",
    databaseURL: "https://clone-544a4.firebaseio.com",
    projectId: "clone-544a4",
    storageBucket: "clone-544a4.appspot.com",
    messagingSenderId: "705882745466",
    appId: "1:705882745466:web:d216d27e214b7786faa9c3"
});


const db = firebaseApp.firestore();
const auth = firebase.auth();
export {db, auth}