import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB6N2Guekhd98Or8buCxQxCzxSIkURGaYE",
    authDomain: "firstapp-cbd4a.firebaseapp.com",
    databaseURL: "https://firstapp-cbd4a.firebaseio.com",
    projectId: "firstapp-cbd4a",
    storageBucket: "firstapp-cbd4a.appspot.com",
    messagingSenderId: "589322632592",
    appId: "1:589322632592:web:599f59a6b916e8d9ef4715",
    measurementId: "G-K373RDW4MK"
};

export const firebaseImpl = firebase.initializeApp(firebaseConfig);
export const firebaseDatabase = firebase.database();