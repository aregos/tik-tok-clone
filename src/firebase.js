import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDsGPVty6pxGHeZvb-3516SRPU8_k1bKDc",
    authDomain: "tik-tok-clone-81f78.firebaseapp.com",
    databaseURL: "https://tik-tok-clone-81f78.firebaseio.com",
    projectId: "tik-tok-clone-81f78",
    storageBucket: "tik-tok-clone-81f78.appspot.com",
    messagingSenderId: "304187713744",
    appId: "1:304187713744:web:0e3b12d4d41c4da70756d5",
    measurementId: "G-0ZZW040YZ2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;