// import firebase from "./firebase/compat/app"
// import firebase from "firebase/app"
import {initializeApp} from "firebase/app"
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyATc0ObdO-lZzZIxhh2ErBhZcRpF9RLcdY",
    authDomain: "fullstacknetflix.firebaseapp.com",
    projectId: "fullstacknetflix",
    storageBucket: "fullstacknetflix.appspot.com",
    messagingSenderId: "118925211455",
    appId: "1:118925211455:web:85072069506120fa2ec58a",
    measurementId: "G-22B9J1NQX5"
  };

// firebase.initializeApp(firebaseConfig)
// const storage = firebase.storage();
const app = initializeApp(firebaseConfig)
const storage = getStorage(app)
// const storage = app.storage()

export default storage;